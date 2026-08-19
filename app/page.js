"use client";

import { useEffect, useRef, useState } from "react";
import { creatures, quiz, scoreCompatibility } from "./creatures";
import { deskSceneStyles } from "./deskStyles";

const asset = path => `${process.env.NODE_ENV === "production" ? "/cursor-creature-adoption-agency" : ""}${path}`;

function AgencyHeader({ adopted }) {
  return <header className="agencyHeader">
    <a className="seal" href="#top" aria-label="Agency home"><b>CC</b><span>AA</span></a>
    <div><strong>Cursor Creature<br/>Adoption Agency</strong><small>Licensed for temporary browser companionship</small></div>
    <nav><a href="#residents">Residents</a><a href="#compatibility">Match test</a><a href="#desk">Visiting desk</a></nav>
    <div className="caseStatus"><i className={adopted?"ready":""}/><span>{adopted?"ADOPTION FILED":"4 CREATURES WAITING"}</span></div>
  </header>;
}

const fieldNotes = [
  ["09:14", "Mote returned a missing tab to its original window."],
  ["10:02", "Pip inspected seven buttons and approved five."],
  ["11:47", "Loop completed an unauthorized lap around the address bar."],
  ["13:26", "Velvet fell asleep beside an unfinished sentence."],
];

function AgencyLedger({ selected }) {
  const [note, setNote] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setNote(value => (value + 1) % fieldNotes.length), 4200);
    return () => clearInterval(timer);
  }, []);
  return <aside className="agencyLedger" aria-label="Live agency field notes">
    <div><small>FIELD LOG / LIVE</small><i/></div>
    <p key={note}><b>{fieldNotes[note][0]}</b>{fieldNotes[note][1]}</p>
    <span>Current visitor: <strong>{selected.name}</strong></span>
  </aside>;
}

function CreatureFollower({ creature, cursor, active=true, reacting=false }) {
  const position = useRef({x: 0, y: 0});
  const [draw, setDraw] = useState(position.current);
  useEffect(()=>{
    if (!active) return;
    let frame;
    const animate=()=>{
      position.current.x += (cursor.x - creature.distance - position.current.x) * creature.lag;
      position.current.y += (cursor.y + 18 - position.current.y) * creature.lag;
      setDraw({...position.current}); frame=requestAnimationFrame(animate);
    };
    frame=requestAnimationFrame(animate); return()=>cancelAnimationFrame(frame);
  },[active, creature, cursor]);
  if(!active) return null;
  return <div className={`follower tempo-${creature.tempo} ${reacting?"isSnacking":""}`} style={{left:draw.x,top:draw.y,"--pet":creature.color}} aria-hidden="true">
    <img src={asset(creature.image)} alt=""/><i/><span>{reacting?"crumb accepted!":`${creature.name} is visiting`}</span>
  </div>;
}

function ResidentCard({ creature, selected, onSelect }) {
  return <article className={`residentCard ${selected?"selected":""}`} style={{"--pet":creature.color,"--petInk":creature.ink}}>
    <button onClick={onSelect} aria-pressed={selected}>
      <div className="residentNo">FILE / {creature.id.toUpperCase().padEnd(6,"·")}</div>
      <div className="portrait"><img src={asset(creature.image)} alt={`${creature.name}, a ${creature.species}`}/><i>AVAILABLE</i></div>
      <div className="cardCopy"><small>{creature.species}</small><h3>{creature.name}</h3><p>{creature.bio}</p></div>
      <div className="traits">{creature.traits.map(t=><span key={t}>{t}</span>)}</div>
      <b className="meet">{selected?"VISITING NOW":"MEET THIS CREATURE"} <i>↗</i></b>
    </button>
  </article>;
}

const visitMilestones = [
  { minimum: 0, title: "Cautiously observing", description: "Your visitor is watching the cursor from a professionally reasonable distance.", recommendation: "Try one slow circle or offer a crumb." },
  { minimum: 25, title: "Considering friendship", description: "The agency has observed one softened posture and a possible approving blink.", recommendation: "Investigate something on the desk together." },
  { minimum: 50, title: "Actively delighted", description: "Your visitor now associates this cursor with interesting objects and reliable snacks.", recommendation: "You may begin discussing names and toolbar arrangements." },
  { minimum: 75, title: "Ready to follow", description: "All signs indicate a stable bond with a low risk of accidental tab abandonment.", recommendation: "The adoption desk is ready when you are." },
];

const creatureVisitCopy = {
  mote: {
    snack: "Mote catches the crumb, glows once, and stores the moment somewhere behind its ears.",
    ribbon: "Mote studies the ribbon's shadow rather than the ribbon. This is apparently significant.",
    window: "Mote peers through the pocket window and confirms that the other side is still there.",
    note: "Mote reads the tiny note twice, then sits directly on the question mark.",
  },
  loop: {
    snack: "Loop intercepts the crumb at remarkable speed and performs one unauthorized victory lap.",
    ribbon: "Loop declares the ribbon a distant relative and immediately attempts a family reunion.",
    window: "Loop enters through the pocket window and exits through the exact same pocket window.",
    note: "Loop underlines the tiny note with its entire body. The note seems more official now.",
  },
  pip: {
    snack: "Pip catches the crumb neatly, checks it for interesting details, and approves the texture.",
    ribbon: "Pip measures the ribbon with three careful hops and records an excellent result.",
    window: "Pip checks all four corners of the pocket window before looking through the middle.",
    note: "Pip discovers the question mark and quietly upgrades it to a very important question mark.",
  },
  velvet: {
    snack: "Velvet lets the crumb orbit once before accepting it with a slow and dignified blink.",
    ribbon: "Velvet arranges the ribbon into a comfortable thought and rests beside it for a moment.",
    window: "Velvet watches an imaginary midnight through the pocket window.",
    note: "Velvet guards the tiny note as though it contains the ending to an unfinished dream.",
  },
};

const deskCuriosities = [
  { id:"ribbon", label:"Ribbon sample", image:"/curiosities/ribbon.webp", title:"The ribbon remembers a breeze.", detail:"It unfurls across the habitat and waits for a creature to chase the loose end." },
  { id:"window", label:"Pocket window", image:"/curiosities/window.webp", title:"A very small elsewhere opens.", detail:"For a moment, the visiting desk has its own night sky and two stars worth investigating." },
  { id:"note", label:"Tiny note", image:"/curiosities/note.webp", title:"The question is finally revealed.", detail:"It asks: would you still choose each other if the cursor stopped moving?" },
];

function VisitJournal({ creature, trust, discoveries, reacting }) {
  const milestone = [...visitMilestones].reverse().find(item => trust >= item.minimum);
  const observations = [
    { id: "arrival", complete: true, text: `${creature.name} entered the supervised habitat.` },
    { id: "pace", complete: trust >= 18, text: "Cursor movement registered as considerate." },
    { id: "snack", complete: trust >= 26, text: "At least one browser crumb was accepted." },
    { id: "curiosity", complete: discoveries.length > 0, text: "A desk curiosity received a full inspection." },
    { id: "bond", complete: trust >= 50, text: "Mutual following appears increasingly likely." },
  ];
  const filed = observations.filter(item => item.complete).length;
  return <div className={`visitJournal ${reacting ? "recording" : ""}`}>
    <header><div><small>LIVE BEHAVIOR FILE</small><b>{String(Math.round(trust)).padStart(3,"0")} / 100</b></div><i>{reacting ? "RECORDING SNACK RESPONSE" : "OBSERVATION ACTIVE"}</i></header>
    <section><small>CURRENT READING</small><h3>{milestone.title}</h3><p>{milestone.description}</p><em>{milestone.recommendation}</em></section>
    <ol>{observations.map((item,index)=><li className={item.complete?"complete":""} key={item.id}><b>{String(index+1).padStart(2,"0")}</b><span>{item.text}</span><i>{item.complete?"FILED":"WAITING"}</i></li>)}</ol>
    <footer><span>VISITOR / {creature.name.toUpperCase()}</span><span>NOTES / {filed} OF {observations.length}</span></footer>
  </div>;
}

function VisitingDesk({ creature, cursor, onBeginAdoption }) {
  const [trust,setTrust]=useState(12);
  const [message,setMessage]=useState("Move around the desk. Let them decide what they think of you.");
  const [snack,setSnack]=useState(null);
  const [reaction,setReaction]=useState(false);
  const [discoveries,setDiscoveries]=useState([]);
  const [activeCuriosity,setActiveCuriosity]=useState(null);
  const deskRef=useRef(null);
  const last=useRef({x:0,y:0,t:Date.now()});
  const interact=e=>{
    const now=Date.now(),speed=Math.hypot(e.clientX-last.current.x,e.clientY-last.current.y)/Math.max(1,now-last.current.t);last.current={x:e.clientX,y:e.clientY,t:now};
    if(speed<.75){setTrust(n=>Math.min(100,n+.18));setMessage(`${creature.name} approves of your considerate pace.`)}
    else if(speed>2.7){setTrust(n=>Math.max(4,n-.3));setMessage(`${creature.name} needs a moment after that dramatic entrance.`)}
  };
  useEffect(()=>{setTrust(12);setDiscoveries([]);setActiveCuriosity(null);setMessage(`Move gently. ${creature.name} is deciding what they think of you.`)},[creature]);
  const offer=()=>{
    const id=Date.now();
    setSnack({id,x:cursor.x-16,y:cursor.y+16});
    setReaction(true);
    setTrust(n=>Math.min(100,n+14));
    setMessage(creatureVisitCopy[creature.id].snack);
    setTimeout(()=>setSnack(current=>current?.id===id?null:current),1100);
    setTimeout(()=>setReaction(false),1350);
  };
  const inspect=(id,label)=>{
    if(!discoveries.includes(id)){setDiscoveries(items=>[...items,id]);setTrust(n=>Math.min(100,n+7))}
    setActiveCuriosity(id);
    setReaction(true);
    setTimeout(()=>setReaction(false),1100);
    setMessage(creatureVisitCopy[creature.id][id] || `${creature.name} investigated the ${label} and filed it under “promising.”`);
  };
  const curiosity=deskCuriosities.find(item=>item.id===activeCuriosity);
  return <section className="visitingSection" id="desk" style={{"--pet":creature.color}}>
    <style>{deskSceneStyles}</style>
    <div className="sectionLabel"><span>03</span><b>SUPERVISED VISITING DESK</b><i>MOVE GENTLY</i></div>
    <div className="desk" ref={deskRef} onPointerMove={interact}>
      <div className="deskGrid"/><div className="habitatPath"><i/><i/><i/><span>approved wandering route</span></div>
      <div className="deskMemo"><small>CARE NOTE</small><p>{creature.note}</p></div>
      <div className="deskCuriosities" aria-label="Objects for the creature to investigate"><small>CHOOSE AN OBJECT TO PLACE IN THE FIELD</small>{deskCuriosities.map(item=><button className={`${discoveries.includes(item.id)?"found":""} ${activeCuriosity===item.id?"active":""}`} onClick={()=>inspect(item.id,item.label.toLowerCase())} key={item.id}><img src={asset(item.image)} alt=""/><span><b>{item.label}</b><i>{discoveries.includes(item.id)?"INSPECTED":"PLACE IN FIELD"}</i></span></button>)}</div>
      {curiosity&&<div key={curiosity.id} className={`curiosityScene scene-${curiosity.id}`}><button onClick={()=>setActiveCuriosity(null)} aria-label="Put curiosity away">×</button><div className="sceneGlow"/><img src={asset(curiosity.image)} alt={curiosity.label}/><article><small>FIELD EVENT / {curiosity.id.toUpperCase()}</small><h3>{curiosity.title}</h3><p>{curiosity.detail}</p><b>{creature.name.toUpperCase()} IS INVESTIGATING</b></article>{curiosity.id==="window"&&<div className="fieldStars"><i/><i/><i/><i/></div>}</div>}
      <div className="restingSpot"><span>OPTIONAL<br/>RESTING SPOT</span><i/></div>
      <CreatureFollower creature={creature} cursor={cursor} reacting={reaction}/>
      {snack&&<div key={snack.id} className="cursorCrumb" style={{left:snack.x,top:snack.y}}><i/><b>CURSOR CRUMB</b></div>}
      <div className="trustMeter"><small>MUTUAL TRUST</small><b>{Math.round(trust)}%</b><i><span style={{width:`${trust}%`}}/></i></div>
      <div className="visitPrompt"><b>{reaction?"SNACK RECEIVED":"VISIT IN PROGRESS"}</b><span>{discoveries.length}/3 desk curiosities inspected</span></div>
      <VisitJournal creature={creature} trust={trust} discoveries={discoveries} reacting={reaction}/>
      <div className="deskActions"><p>{message}</p><button onClick={offer}>OFFER A CURSOR CRUMB</button><button className="primary" onClick={onBeginAdoption} disabled={trust<25}>BEGIN ADOPTION</button></div>
    </div>
  </section>;
}

function AftercareGuide({ creature }) {
  const [open, setOpen] = useState(false);
  const routines = [
    `Begin each session with one slow circle so ${creature.name} knows you have arrived.`,
    `Keep ${creature.name}'s resting place near an edge that does not contain urgent controls.`,
    `Provide one interesting detour for every three practical clicks.`,
  ];
  return <div className={`aftercare ${open ? "open" : ""}`}>
    <button onClick={() => setOpen(value => !value)} aria-expanded={open}>
      <span>OPTIONAL AFTERCARE BRIEFING</span><b>{open ? "CLOSE" : "OPEN FILE"} ↗</b>
    </button>
    {open && <div><header><small>PLACEMENT NOTES / {creature.id.toUpperCase()}</small><h3>Living well with {creature.name}</h3></header><ol>{routines.map((routine, index) => <li key={routine}><b>0{index + 1}</b><p>{routine}</p></li>)}</ol></div>}
  </div>;
}

function MatchTest({ onMatch }) {
  const [step,setStep]=useState(0),[answers,setAnswers]=useState([]),[result,setResult]=useState(null);
  const answer=value=>{const next=[...answers,value];setAnswers(next);if(step===quiz.length-1){const id=scoreCompatibility(next);setResult(id);onMatch(id)}else setStep(step+1)};
  const reset=()=>{setStep(0);setAnswers([]);setResult(null)};
  const matched=creatures.find(c=>c.id===result);
  return <section className="matchSection" id="compatibility">
    <div className="sectionLabel light"><span>02</span><b>COMPATIBILITY INTERVIEW</b><i>NO WRONG HOUSEHOLDS</i></div>
    {!matched?<div className="quizPanel"><aside><small>QUESTION</small><strong>{String(step+1).padStart(2,"0")}<i>/03</i></strong><p>We use a highly respected system of intuition, cursor telemetry, and snacks.</p></aside><div><h2>{quiz[step].q}</h2>{quiz[step].options.map(([label,value])=><button key={value} onClick={()=>answer(value)}><span>{label}</span><i>CHOOSE ↗</i></button>)}</div></div>:
    <div className="matchResult" style={{"--pet":matched.color}}><div><small>COMPATIBILITY REPORT / COMPLETE</small><h2>You and <em>{matched.name}</em><br/>may be wonderfully compatible.</h2><p>{matched.bio}</p><button onClick={reset}>RETAKE THE INTERVIEW</button></div><img src={asset(matched.image)} alt={matched.name}/><b>96%<span>SCIENTIFICALLY<br/>QUESTIONABLE MATCH</span></b></div>}
  </section>;
}

function AdoptionForm({ creature, onClose, onAdopt }) {
  const [guardian,setGuardian]=useState(""),[newName,setNewName]=useState(creature.name),[promise,setPromise]=useState(false),[complete,setComplete]=useState(false);
  const submit=e=>{e.preventDefault();if(!guardian||!newName||!promise)return;const record={creature:creature.id,name:newName,guardian,date:new Date().toISOString()};localStorage.setItem("cursor-creature-adoption",JSON.stringify(record));setComplete(true);onAdopt(record)};
  return <div className="modalShade" role="presentation"><section className="adoptionModal" role="dialog" aria-modal="true" aria-labelledby="adopt-title" style={{"--pet":creature.color}}><button className="close" onClick={onClose} aria-label="Close">×</button>
    {!complete?<><div className="formCreature"><img src={asset(creature.image)} alt={creature.name}/><span>CASE {creature.id.toUpperCase()} / READY</span></div><form onSubmit={submit}><small>FINAL PLACEMENT FORM</small><h2 id="adopt-title">Make it<br/><em>official-ish.</em></h2><label>Your name<input value={guardian} onChange={e=>setGuardian(e.target.value)} placeholder="future cursor guardian"/></label><label>Their name<input value={newName} onChange={e=>setNewName(e.target.value)}/></label><label className="promise"><input type="checkbox" checked={promise} onChange={e=>setPromise(e.target.checked)}/><span>I promise to provide interesting links, reasonable cursor speeds, and a safe place near the toolbar.</span></label><button className="fileButton">FILE THE ADOPTION ↗</button></form></>:
    <div className="certificate"><small>CURSOR CREATURE ADOPTION AGENCY</small><h2>Certificate of<br/><em>Mutual Following</em></h2><img src={asset(creature.image)} alt=""/><p>This confirms that <b>{newName}</b> has chosen to accompany <b>{guardian}</b> across this browser, for as long as both parties find the arrangement delightful.</p><div><span>Filed {new Date().toLocaleDateString()}</span><b>CCAA / APPROVED</b></div><button onClick={onClose}>TAKE THEM HOME</button></div>}
  </section></div>;
}

export default function Home() {
  const [selected,setSelected]=useState(creatures[0]);
  const [cursor,setCursor]=useState(()=>({
    x: typeof window === "undefined" ? 900 : window.innerWidth*.72,
    y: typeof window === "undefined" ? 420 : window.innerHeight*.46,
  }));
  const [modal,setModal]=useState(false),[adopted,setAdopted]=useState(null);
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem("cursor-creature-adoption"));if(saved)setAdopted(saved)}catch{}},[]);
  const onMove=e=>setCursor({x:e.clientX,y:e.clientY});
  const select=id=>{const creature=creatures.find(c=>c.id===id);if(creature)setSelected(creature)};
  return <main id="top" onPointerMove={onMove} style={{"--pet":selected.color}}>
    <AgencyHeader adopted={adopted}/>
    <section className="hero">
      <div className="heroCopy"><small>OPEN INTAKE / EST. ONE TAB AGO</small><h1>Find something<br/>small to <em>follow you.</em></h1><p>Four curious browser creatures are waiting for compatible cursors. Meet them slowly. They are evaluating you too.</p><div><a href="#residents">MEET THE RESIDENTS</a><a className="quiet" href="#compatibility">TAKE THE MATCH TEST</a></div></div>
      <div className="heroHabitat"><span className="orbit one"/><span className="orbit two"/><img src={asset(selected.image)} alt={`${selected.name}, currently available`}/><b>{selected.name}<small>{selected.species}</small></b><i>FOLLOWS<br/>GENTLY</i></div>
      <AgencyLedger selected={selected}/>
      <div className="intakeStrip"><span><b>04</b> residents</span><span><b>100%</b> imaginary</span><span><b>01</b> tab required</span></div>
    </section>
    <section className="residents" id="residents"><div className="sectionLabel"><span>01</span><b>AVAILABLE RESIDENTS</b><i>SELECT TO BEGIN A VISIT</i></div><header><h2>They have been<br/><em>waiting near the edge.</em></h2><p>Every creature responds differently to speed, distance, and attention. Choose on instinct, or let the agency conduct a questionable compatibility assessment.</p></header><div className="residentGrid">{creatures.map(c=><ResidentCard key={c.id} creature={c} selected={selected.id===c.id} onSelect={()=>setSelected(c)}/>)}</div></section>
    <MatchTest onMatch={select}/>
    <VisitingDesk creature={selected} cursor={cursor} onBeginAdoption={()=>setModal(true)}/>
    <AftercareGuide creature={selected}/>
    <footer><div className="seal"><b>CC</b><span>AA</span></div><h2>Good homes are<br/>made of <em>small attention.</em></h2><div><span>JEAN / WONDER ROOM EXPERIMENT</span><a href="https://github.com/jean-tmk/cursor-creature-adoption-agency">VIEW SOURCE ↗</a></div></footer>
    {modal&&<AdoptionForm creature={selected} onClose={()=>setModal(false)} onAdopt={setAdopted}/>} 
  </main>;
}
