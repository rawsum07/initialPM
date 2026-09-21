import Link from "next/link";
import { ArrowRight, BarChart3, MessageSquare, Sparkles } from "lucide-react";

export default function Landing() {
  return <main className="landing"><nav><span className="wordmark">NUDGE <i>×</i> PM LAB</span><Link href="/onboarding" className="text-link">Sign in <ArrowRight size={15}/></Link></nav>
    <section className="hero"><p className="eyebrow">INTERACTIVE PRODUCT MANAGEMENT SIMULATOR</p><h1>You Are The<br/><em>PM Now.</em></h1><p className="hero-copy">No lectures. No endless frameworks.<br/>Make decisions. Deal with consequences. Learn Product Management.</p><Link href="/onboarding" className="primary">Start your first day <ArrowRight size={17}/></Link><p className="fineprint">A 15–20 minute interactive PM simulation.</p></section>
    <section className="preview"><div className="preview-top"><span className="dot"></span><span>DAY 03 / 30</span><b>NUDGE</b><span>10:07 AM</span></div><div className="preview-body"><aside><small>TODAY</small><span className="active">▣ Inbox</span><span>◫ Analytics</span><span>◌ Customers</span><span>◇ Decisions</span></aside><article><p className="eyebrow">INBOX · 10:07 AM</p><h3>Morning. MAU dropped 18% this month.</h3><p>Need to understand what&apos;s happening before today&apos;s 4 PM review.</p><button>Open investigation <ArrowRight size={15}/></button></article><div className="health"><small>YOUR STATE</small><p>Trust <b>8/10</b></p><p>Team <b>6/10</b></p><p>Budget <b>8/10</b></p></div></div></section>
    <section className="pillars"><div><span><BarChart3 size={18}/></span><h2>Think</h2><p>Investigate ambiguous product problems.</p></div><div><span><MessageSquare size={18}/></span><h2>Decide</h2><p>Make trade-offs with incomplete information.</p></div><div><span><Sparkles size={18}/></span><h2>Ship</h2><p>See what happens when your decisions meet reality.</p></div></section>
  </main>;
}
