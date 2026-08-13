import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Shield, Cpu, Code2 } from 'lucide-react';
import useTilt from '../hooks/useTilt';

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState('db');
  const codeTilt = useTilt({ max: 4, scale: 1.01 });

  const snippets = {
    db: {
      title: '1. DB_Lock.py',
      icon: <Database size={14} className="text-accent-gold" />,
      language: 'python',
      theme: 'Concurrency & Locking',
      desc: 'Prevents double-booking collisions by running atomic transaction locks on targeted seminar rows.',
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
      title: '2. REST_Router.py',
      icon: <Shield size={14} className="text-accent-blue" />,
      language: 'python',
      theme: 'API Schema Validation',
      desc: 'Enforces payload validation rules and token validation before serializing complaint databases.',
      code: `@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_complaint(request):
    # Enforce strict coordinates bounding box values
    serializer = ComplaintSerializer(data=request.data)
    
    if not serializer.is_valid():
        return Response(
            serializer.errors, 
            status=status.HTTP_400_BAD_REQUEST
        )
        
    # Prevent geo duplicates within 50m radius
    is_duplicate = check_radial_duplicate(
        serializer.validated_data['lat'],
        serializer.validated_data['lng']
    )
    
    if is_duplicate:
        return Response(
            {"detail": "Complaint already active."},
            status=status.HTTP_409_CONFLICT
        )
        
    serializer.save(reporter=request.user)
    return Response(serializer.data, status=status.HTTP_201_CREATED)`
    },
    ai: {
      title: '3. AI_Agent.py',
      icon: <Cpu size={14} className="text-accent-purple" />,
      language: 'python',
      theme: 'Regional LLM Integration',
      desc: 'Leverages Sarvam AI translation endpoints with robust error handling and exponential retries.',
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
    }
  };

  return (
    <section className="py-12 px-6 relative w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto z-10 w-full relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-h-[85vh] overflow-y-auto lg:overflow-visible scrollbar-none">
        
        {/* Left Column: Heading & Explanation */}
        <div className="lg:col-span-5 space-y-4 text-left pr-2">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-xs font-semibold text-accent-blue tracking-wider w-fit">
              <Code2 size={12} className="animate-pulse" />
              <span>Systems Engineering</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-text-light leading-tight">Backend &amp; <span className="text-gradient">Architectures</span></h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans">
              Demonstrating concurrent lock mechanics, strict schema boundaries, and external LLM translation logic modeled from production sandboxes.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-slate-900/10 backdrop-blur-md">
            <span className="text-[10px] font-mono font-bold text-accent-gold uppercase tracking-widest block mb-1">[ACTIVE_THEME]</span>
            <p className="text-text-muted text-xs leading-relaxed font-sans">
              {snippets[activeTab].desc}
            </p>
          </div>
        </div>

        {/* Right Column: Code Terminal IDE */}
        <div 
          ref={codeTilt.ref}
          style={codeTilt.style}
          className="lg:col-span-7 glass-card rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group select-none"
        >
          <div className="absolute inset-0 card-glare opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* IDE Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-850">
            {/* Terminal Dots */}
            <div className="flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>

            {/* Snippet Tabs */}
            <div className="flex gap-1.5 pl-4">
              {Object.keys(snippets).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium border transition-all duration-300 cursor-pointer ${
                    activeTab === key
                      ? 'border-accent-blue bg-accent-blue/5 text-accent-blue shadow-inner'
                      : 'border-transparent text-text-muted hover:text-text-light'
                  }`}
                >
                  {snippets[key].icon}
                  <span>{snippets[key].title}</span>
                </button>
              ))}
            </div>

            <span className="text-[9px] text-accent-blue font-bold font-mono tracking-widest hidden sm:block">[IDE.SHELL]</span>
          </div>

          {/* Code print box */}
          <div className="p-4 bg-slate-950/80 text-left font-mono text-[11px] md:text-[12px] leading-relaxed overflow-x-auto scrollbar-none h-[280px] md:h-[350px]">
            <span className="text-[9px] text-accent-blue/40 font-mono tracking-widest block mb-2"># THEME: {snippets[activeTab].theme.toUpperCase()}</span>
            <pre className="text-slate-300 font-mono">
              <code>{snippets[activeTab].code}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
