export const deskSceneStyles = `
.deskCuriosities{left:28px;top:190px;width:218px;display:grid;gap:8px;z-index:5}
.deskCuriosities>small{font:7px/1.35 monospace;letter-spacing:1px;margin-bottom:3px}
.deskCuriosities button,.deskCuriosities button:nth-child(2),.deskCuriosities button:nth-child(3),.deskCuriosities button:nth-child(4){width:100%;height:72px;transform:none;display:grid;grid-template-columns:67px 1fr;gap:8px;padding:5px;text-align:left;background:#fffaf0;box-shadow:3px 3px 0 #17243915}
.deskCuriosities button:hover{transform:translateX(4px);background:#fffaf0}
.deskCuriosities button.active{background:color-mix(in srgb,var(--pet),white 65%);box-shadow:4px 4px 0 #172439}
.deskCuriosities button.found:not(.active){background:#f4eee2}
.deskCuriosities button img{width:62px;height:60px;object-fit:contain}
.deskCuriosities button span{display:grid;align-content:center;gap:5px}
.deskCuriosities button span b{font:13px Georgia,serif;text-transform:none}
.deskCuriosities button span i{font:6px monospace;font-style:normal;letter-spacing:1px;color:#657064}
.curiosityScene{position:absolute;left:270px;right:370px;top:105px;bottom:115px;z-index:4;border:1px solid #172439;background:#e9e0d1;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;align-items:center;animation:sceneArrive .45s cubic-bezier(.2,.8,.2,1)}
.curiosityScene>button{position:absolute;right:10px;top:10px;width:32px;height:32px;border:1px solid #172439;background:#fffaf0;z-index:5;font-size:20px}
.curiosityScene>.sceneObject{width:100%;height:310px;object-fit:contain;padding:20px;position:relative;z-index:2;filter:drop-shadow(0 18px 18px #17243932)}
.curiosityScene article{padding:28px 28px 28px 5px;position:relative;z-index:3}
.curiosityScene article small{font:7px monospace;letter-spacing:1px}
.curiosityScene article h3{font:normal 31px/.95 Georgia,serif;margin:12px 0}
.curiosityScene article p{font:12px/1.45 Georgia,serif}
.curiosityScene article b{display:inline-block;margin-top:10px;padding:7px 9px;background:#172439;color:#fff;font:6px monospace;letter-spacing:1px}
.sceneGlow{position:absolute;inset:0;background:radial-gradient(circle at 32% 50%,color-mix(in srgb,var(--pet),transparent 30%),transparent 40%);animation:fieldGlow 2.6s ease-in-out infinite}
.scene-ribbon>.sceneObject{width:125%;max-width:none;transform:translateX(-10%);animation:ribbonUnfurl 2.8s ease-in-out infinite}
.scene-window{background:linear-gradient(135deg,#172439,#302d61);color:#fff}
.scene-window .sceneGlow{background:radial-gradient(circle at 35% 50%,#aaa3ff66,transparent 43%)}
.scene-window>.sceneObject{animation:windowOpen 2.4s ease-in-out infinite}
.fieldStars i{position:absolute;width:5px;height:5px;background:#ffd66b;border-radius:50%;animation:starBlink 1.8s ease-in-out infinite}
.fieldStars i:nth-child(1){left:7%;top:14%}.fieldStars i:nth-child(2){left:55%;top:12%;animation-delay:.4s}.fieldStars i:nth-child(3){right:12%;bottom:17%;animation-delay:.8s}.fieldStars i:nth-child(4){left:18%;bottom:12%;animation-delay:1.2s}
.scene-note>.sceneObject{animation:noteReveal 2.4s ease-in-out infinite}
.creatureReaction{position:absolute;z-index:4;left:7%;top:24%;width:150px;height:180px;pointer-events:none}
.sceneCreature{position:absolute;width:145px;height:145px;object-fit:contain;filter:drop-shadow(0 12px 12px #17243955)}
.creatureReaction>i{position:absolute;inset:0;border:1px dashed var(--pet);border-radius:50%;animation:reactionRing 2s ease-in-out infinite}
.creatureReaction>span{position:absolute;left:50%;top:142px;transform:translateX(-50%);white-space:nowrap;background:#172439;color:#fff;padding:5px 7px;font:6px monospace;letter-spacing:1px}
.scene-ribbon .creatureReaction{animation:chaseRibbon 3.2s cubic-bezier(.45,0,.55,1) infinite}
.scene-ribbon .sceneCreature{animation:creatureTumble 1.6s ease-in-out infinite}
.scene-window .creatureReaction{left:23%;top:42%;animation:peekWindow 2.8s ease-in-out infinite}
.scene-note .creatureReaction{left:26%;top:43%;animation:readNote 2.6s ease-in-out infinite}
.visitor-loop .creatureReaction{animation-duration:1.8s}.visitor-loop .sceneCreature{filter:drop-shadow(0 12px 12px #17243955) saturate(1.12)}
.visitor-mote .creatureReaction{animation-duration:4s}.visitor-mote .sceneCreature{animation-direction:alternate}
.visitor-pip .creatureReaction{animation-duration:2.2s}.visitor-pip .sceneCreature{scale:.88}
.visitor-velvet .creatureReaction{animation-duration:4.5s}.visitor-velvet .sceneCreature{filter:drop-shadow(0 12px 18px #aaa3ff88)}
.scene-note:after{content:'WOULD YOU STILL CHOOSE EACH OTHER?';position:absolute;left:30px;bottom:22px;font:7px monospace;letter-spacing:1px;color:#17243999}
@keyframes sceneArrive{from{opacity:0;transform:translateY(15px) scale(.97)}}
@keyframes fieldGlow{50%{opacity:.55;transform:scale(1.08)}}
@keyframes ribbonUnfurl{50%{transform:translateX(-4%) rotate(3deg) scale(1.05)}}
@keyframes windowOpen{50%{transform:translateY(-7px);filter:drop-shadow(0 0 24px #b9a8ff)}}
@keyframes starBlink{50%{opacity:.2;transform:scale(.45)}}
@keyframes noteReveal{50%{transform:rotate(-3deg) translateY(-8px)}}
@keyframes reactionRing{50%{transform:scale(1.15);opacity:.35}}
@keyframes chaseRibbon{0%,100%{transform:translate(-12px,34px) rotate(-8deg)}50%{transform:translate(185px,-45px) rotate(10deg)}}
@keyframes creatureTumble{50%{transform:rotate(12deg) scale(1.08)}}
@keyframes peekWindow{0%,100%{transform:translate(-55px,42px) rotate(-7deg)}45%,65%{transform:translate(45px,-35px) rotate(4deg)}}
@keyframes readNote{0%,100%{transform:translate(70px,35px) rotate(8deg)}50%{transform:translate(-15px,-32px) rotate(-5deg)}}
@media(max-width:1100px){.curiosityScene{left:265px;right:25px;top:115px;bottom:175px}.visitJournal{display:none}}
@media(max-width:700px){.deskCuriosities{left:15px;right:15px;top:185px;width:auto;grid-template-columns:repeat(3,1fr)}.deskCuriosities>small{grid-column:1/-1}.deskCuriosities button,.deskCuriosities button:nth-child(n){height:84px;display:flex;padding:4px}.deskCuriosities button img{width:52px;height:52px}.deskCuriosities button span i{display:none}.curiosityScene{left:15px;right:15px;top:335px;bottom:180px;grid-template-columns:1fr}.curiosityScene>.sceneObject{height:160px}.creatureReaction{width:95px;height:110px;left:8%!important;top:31%!important}.sceneCreature{width:95px;height:95px}.creatureReaction>span{top:92px}.curiosityScene article{padding:5px 20px 18px}.curiosityScene article h3{font-size:23px}}
`;
