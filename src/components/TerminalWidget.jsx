import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Shield, Cpu, Code2, Play, Copy, RefreshCw, FileText, Settings } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState('db');
  const [consoleLog, setConsoleLog] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const codeTilt = useTilt({ max: 4, scale: 1.01 });

  const snippets = {
    db: {
      title: 'backend.py',
      icon: <Database size={12} className="text-accent-gold" />,
      theme: 'Concurrency & Locking',
      desc: 'atomic transaction locks on targeted seminar rows inside Django.',
      runLog: '>>> Running backend.py...\n[INFO] Initializing db transaction connection...\n[LOCK] SELECT FOR UPDATE acquired on Hall ID 4\n[VALID] 0 conflicting reservation schedule spans detected.\n[SUCCESS] Booking transaction committed successfully! ID: Booking_829\n>>> Process completed with Exit Code: 0',
      code: `from django.db import transaction
from rest_framework.exceptions import ValidationError

@transaction.atomic
def reserve_seminar_space(hall_id, start_time, end_time):
    # Lock target rows until transaction completes
    hall = Hall.objects.select_for_update().get(id=hall_id)
    
    # Check intersecting schedules
    collisions = Booking.objects.filter(
        hall=hall,
        start_time__lt=end_time,
        end_time__gt=start_time
    )
    
    if collisions.exists():
        raise ValidationError("Booking intersection detected.")
        
    return Booking.objects.create(
        hall=hall, 
        start_time=start_time, 
        end_time=end_time
    )`
    },
    api: {
      title: 'api.ts',
      icon: <Shield size={12} className="text-accent-blue" />,
      theme: 'TypeScript API Controller',
      desc: 'Enforces complaint coordinates boundary check loops before posting logs.',
      runLog: '>>> Running api.ts...\n[AXIOS] Posting to /api/civic/complaints...\n[GEOLOC] Lat/Lng coordinates tagged inside Tamil Nadu region\n[DUPLICATE] 0 duplicate tickets active within 50m radius.\n[HTTP] POST 201 Created (Duration: 124ms)\n>>> Process completed with Exit Code: 0',
      code: `import axios from 'axios';

interface ComplaintPayload {
  lat: number;
  lng: number;
  description: string;
}

export async function submitComplaint(payload: ComplaintPayload) {
  // Validate coordinates bounding box
  if (payload.lat < 8.0 || payload.lat > 14.0) {
    throw new Error('Coordinates outside operational bounds.');
  }

  const response = await axios.post('/api/civic/complaints', payload, {
    headers: { 'Content-Type': 'application/json' }
  });
  
  return response.data;
}`
    },
    ai: {
      title: 'ai_service.py',
      icon: <Cpu size={12} className="text-accent-purple" />,
      theme: 'LLM Translation Agent',
      desc: 'Exponential retry hooks on Sarvam AI clinical translator calls.',
      runLog: '>>> Running ai_service.py...\n[RETRY] Connecting to api.sarvam.ai...\n[API] Response 200 OK. Translation Tamil -> English complete\n[DUMP] Translated: "Fever and headaches since yesterday" -> "Severe symptoms"\n>>> Process completed with Exit Code: 0',
      code: `import requests
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=2, max=10)
)
def translate_telemetry_logs(tamil_text):
    payload = {
        "input": tamil_text,
        "source_language": "ta_IN",
        "target_language": "en_XX"
    }
    headers = {"API-Key": settings.SARVAM_KEY}
    
    response = requests.post(
        "https://api.sarvam.ai/translate",
        json=payload,
        headers=headers,
        timeout=8
    )
    response.raise_for_status()
    return response.json()["translated_text"]`
    },
    arch: {
      title: 'architecture.md',
      icon: <FileText size={12} className="text-accent-teal" />,
      theme: 'Systems Architecture',
      desc: 'System blueprint breakdown of full-stack API networks.',
      runLog: '>>> Processing architecture.md...\n[PARSER] Generating markdown token representation...\n# JEEVANSETU SYSTEM ARCHITECTURE BLUEPRINT\n- Mobile Client: React Native / Expo\n- API Gateway: Django REST Framework\n- DB Layer: PostgreSQL (Atomic locks)\n- Translate: Sarvam AI API Integration\n>>> Process completed with Exit Code: 0',
      code: `# System Architecture Blueprint

## JeevanSetu AI
* Mobile Client: React Native (Expo)
* API Server: Django REST Framework (DRF)
* Database: PostgreSQL (Relational transactions)
* Translation Engine: Sarvam AI Dialect REST API

## UrbanEye
* Web Client: React (Vite)
* Backend Server: Spring Boot (Java)
* Geo Engine: OpenStreetMap / Nominatim Reverse API
* DB Layer: PostgreSQL (Geospatial indexes)`
    },
    deploy: {
      title: 'deployment.yml',
      icon: <Settings size={12} className="text-text-muted" />,
      theme: 'Vercel / Render Actions',
      desc: 'CI/CD runner configuration for compiling static Vite bundle pipelines.',
      runLog: '>>> Parsing deployment.yml...\n[CI/CD] Triggering build environment setup...\n[BUILD] vite build completed in 1.4s\n[UPLOAD] Assets deployed successfully to Vercel production edge!\n>>> Process completed with Exit Code: 0',
      code: `name: Production Deployment Pipeline
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build Vite App
        run: |
          npm ci
          npm run build
      - name: Deploy Production Edge
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}`
    }
  };

  const handleRun = () => {
    setIsRunning(true);
    setConsoleLog('');
    setTimeout(() => {
      setConsoleLog(snippets[activeTab].runLog);
      setIsRunning(false);
    }, 850);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    alert(`${snippets[activeTab].title} copied to clipboard.`);
  };

  const handleClear = () => {
    setConsoleLog('');
  };

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Heading & Detail Panel */}
        <div className="lg:col-span-5 space-y-4 text-left pr-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Code2 size={12} className="animate-pulse" />
              <span>Systems Engineering</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">Backend &amp; <span className="text-gradient">Architectures</span></h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans font-medium">
              I write robust systems code beyond frontend styling. Interact with the tabs to inspect authentic, production-grade snippets from my projects.
            </p>
          </div>

          {/* Description banner */}
          <div className="p-4 rounded-xl border border-white/5 bg-slate-900/10 backdrop-blur-md">
            <span className="text-[10px] font-mono font-bold text-accent-gold uppercase tracking-widest block mb-1">[CONTEXT]</span>
            <p className="text-text-muted text-xs leading-relaxed font-sans">
              {snippets[activeTab].desc}
            </p>
          </div>
        </div>

        {/* Right Column: Code Terminal IDE */}
        <div 
          ref={codeTilt.ref}
          style={codeTilt.style}
          className="lg:col-span-7 glass-card rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* IDE Window Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/60 border-b border-slate-850 overflow-x-auto scrollbar-none gap-4">
            {/* Terminal Dots */}
            <div className="flex gap-1.5 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>

            {/* Snippet Tabs */}
            <div className="flex gap-1 overflow-x-auto scrollbar-none">
              {Object.keys(snippets).map((key) => (
                <button
                  key={key}
                  onClick={() => { setActiveTab(key); setConsoleLog(''); }}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium border transition-all duration-300 cursor-pointer ${
                    activeTab === key
                      ? 'border-accent-blue bg-accent-blue/5 text-accent-blue shadow-inner'
                      : 'border-transparent text-text-muted hover:text-text-light'
                  }`}
                >
                  {snippets[key].icon}
                  <span className="text-[11px]">{snippets[key].title}</span>
                </button>
              ))}
            </div>

            {/* Header controls (RUN, COPY, CLEAR) */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button 
                onClick={handleRun}
                disabled={isRunning}
                className="p-1 px-2 rounded bg-accent-blue/10 border border-accent-blue/20 text-accent-blue hover:bg-accent-blue/25 hover:text-white transition-colors duration-300 text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer disabled:opacity-50"
                title="Run Script"
              >
                <Play size={10} />
                <span>{isRunning ? 'RUNNING' : 'RUN'}</span>
              </button>
              <button 
                onClick={handleCopy}
                className="p-1 rounded border border-slate-800 text-text-muted hover:text-text-light transition-colors duration-300 cursor-pointer"
                title="Copy Code"
              >
                <Copy size={11} />
              </button>
              <button 
                onClick={handleClear}
                className="p-1 rounded border border-slate-800 text-text-muted hover:text-text-light transition-colors duration-300 cursor-pointer"
                title="Clear Logs"
              >
                <RefreshCw size={11} />
              </button>
            </div>
          </div>

          {/* Code print box */}
          <div className="bg-slate-950/80 text-left font-mono text-[11px] md:text-[12px] leading-relaxed overflow-y-auto scrollbar-none h-[220px] md:h-[280px] border-b border-slate-900/60 p-4">
            <span className="text-[9px] text-accent-blue/40 font-mono tracking-widest block mb-2"># THEME: {snippets[activeTab].theme.toUpperCase()}</span>
            <pre className="text-slate-300 font-mono">
              <code>{snippets[activeTab].code}</code>
            </pre>
          </div>

          {/* Console output display box */}
          <div className="p-3 bg-black/90 text-left font-mono text-[10px] md:text-[11px] text-accent-teal h-[90px] overflow-y-auto scrollbar-none select-text border-t border-slate-950">
            {consoleLog ? (
              <pre className="whitespace-pre-wrap">{consoleLog}</pre>
            ) : (
              <span className="text-slate-600 italic">&gt;&gt;&gt; Click "RUN" to execute script and print simulated output logs...</span>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
