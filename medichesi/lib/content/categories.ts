import type { Category } from './types'

export const CATEGORIES: Category[] = [
  {
    id: 'airway',
    name: 'Airway, Respiration & Ventilation',
    short: 'Airway',
    desc: 'Upper and lower airway, ventilation parameters, respiratory failure, pediatric airway.',
    color: '#06b6d4',
    colorVar: '--sec-airway',
    icon: 'lung',
    flashcards: [
      { front: 'Adult tidal volume target for ventilation', back: '6 to 8 mL/kg ideal body weight. Avoid overventilation, it decreases preload and venous return.' },
      { front: 'Pediatric uncuffed ETT size formula', back: '(Age / 4) + 4 mm. Cuffed: (Age / 4) + 3.5. Depth at lip: tube size x 3.' },
      { front: 'BVM rate in adult cardiac arrest with advanced airway', back: '1 breath every 6 seconds (10/min). Continuous compressions, no pause.' },
      { front: 'BVM rate in peds with pulse and no advanced airway', back: '1 breath every 2 to 3 seconds (20 to 30/min). Adult with pulse no airway: 1 every 5 to 6 sec.' },
      { front: 'Hypoxic vs hypercapnic respiratory failure', back: 'Type 1 hypoxic: PaO2 under 60 (oxygenation problem, ARDS, pneumonia). Type 2 hypercapnic: PaCO2 over 50 (ventilation problem, COPD, OD).' },
      { front: 'Epiglottitis: key signs and first action', back: 'Tripod, drooling, stridor, muffled voice, fever, looks toxic. Do NOT inspect airway. Keep calm, blow-by O2, rapid transport, be ready for surgical airway.' },
      { front: 'Silent chest in severe asthma means what', back: 'Impending respiratory failure. Air movement is so minimal there is no wheeze. Get aggressive, prepare to intubate.' },
      { front: 'CPAP indications and minimum BP', back: 'CHF pulmonary edema, COPD exacerbation, pneumonia. Patient must be awake, cooperative, able to protect airway, SBP over 90.' },
      { front: 'What PEEP does physiologically', back: 'Increases functional residual capacity, recruits collapsed alveoli, improves oxygenation. Can decrease preload and drop BP.' },
      { front: 'Combi-Tube inflation volumes', back: 'Proximal blue pharyngeal balloon: 100 mL. Distal white distal balloon: 15 mL.' },
      { front: 'Pertussis presentation and infection control', back: 'Paroxysmal coughing fits with inspiratory whoop, post-tussive emesis. Droplet precautions. Common in unvaccinated peds.' },
      { front: 'Cystic fibrosis prehospital concerns', back: 'Thick mucus, chronic infection, pneumothorax risk, hemoptysis. Suction carefully, watch for tension pneumo, gentle ventilation.' },
      { front: 'Home ventilator key parameters', back: 'Tidal volume (6 to 8 mL/kg), rate, FiO2, PEEP (usually 5), I:E ratio (typically 1:2). If dependent patient crashes, disconnect vent and bag.' },
      { front: 'Pediatric tracheostomy emergency: decannulation', back: 'If tube out: attempt reinsertion with same size or one size smaller. If cannot reinsert: cover stoma and bag via mouth OR bag directly over stoma if upper airway obstructed.' },
      { front: 'ETCO2 normal range and what each deviation means', back: 'Normal 35 to 45 mmHg. Below 35: hyperventilating, low cardiac output, hypoperfusion, PE. In CPR, ETCO2 under 10 means compressions are inadequate. Sudden rise above 35 to 40 in arrest is your ROSC alert before pulse returns. Above 45: hypoventilation, hypermetabolism (sepsis, MH, fever), bicarb administration, tourniquet release.' },
      { front: 'Capnography waveform: shark fin shape', back: 'Sloped, fin-shaped waveform = bronchospasm (asthma, COPD, anaphylaxis). The slope is alveolar gas exiting unevenly through narrowed airways. The steeper the slope, the worse the obstruction. Treatment is bronchodilators, not airway maneuvers. Watch the shape flatten as the beta-agonist works.' },
      { front: 'Apneic oxygenation, why and how', back: 'High-flow O2 via NC at 15 L/min DURING intubation extends safe apnea time by 1 to 6+ minutes. Critical for obese, pregnant, septic, or critically ill patients who desat fast. Set it up BEFORE first attempt. Costs nothing, no downside, buys time. Every RSI should have it.' },
      { front: 'Why 100% O2 in COPD is not the bogeyman it is taught to be', back: 'The hypoxic-drive theory is oversimplified. The real mechanisms are V/Q mismatch worsening (Haldane effect releasing CO2 from hemoglobin) and absorption atelectasis. Real-world: titrate to SpO2 88 to 92% in known retainers. But never withhold O2 from a hypoxic COPD patient. Hypoxia kills faster than hypercapnia.' },
      { front: 'Tension pneumothorax, why decompress fast', back: 'Air enters pleural space, cant escape, pressure builds, mediastinum shifts, kinks great vessels, venous return falls, obstructive shock. Signs: severe dyspnea, tracheal deviation (LATE), JVD, absent breath sounds one side, hypotension, hyper-resonance. Decompress 2nd ICS midclavicular OR 4th/5th ICS anterior axillary (newer evidence prefers lateral).' },
      { front: 'Needle decompression catheter length for adults', back: 'Use AT LEAST 8 cm (3.25 inch) catheter for adults. Standard 5 cm catheter fails in 30 to 50% of adults due to chest wall thickness. Insert OVER the third rib (avoid neurovascular bundle on inferior rib edge). Listen for air rush, leave catheter in, follow with chest tube.' },
      { front: 'Cricothyrotomy: when and how', back: 'Cant intubate, cant oxygenate (CICO scenario). Failed BVM, failed supraglottic, failed ETT. Causes: angioedema, massive facial trauma, anaphylaxis with airway swelling, severe burns. Find membrane between thyroid and cricoid cartilage, vertical skin incision, horizontal stab through membrane, dilate, tube in. Last resort but you cannot hesitate when you are there.' },
      { front: 'Anaphylaxis airway, when to act early', back: 'IM epi 0.3 to 0.5 mg (0.01 mg/kg peds) lateral thigh, repeat every 5 to 15 min. Stridor, voice change, lip/tongue swelling = airway closing. Intubate EARLY. Once swollen, you may not be able to. Have surgical airway gear out. Antihistamines and steroids are SECOND LINE. Epi is the only thing that saves lives in anaphylaxis.' },
      { front: 'PE classic triad and reality', back: 'Classic triad (dyspnea, chest pain, hemoptysis) appears in only ~20%. Reality: most PE patients have nonspecific symptoms - sudden dyspnea, tachycardia, tachypnea, low-grade fever, syncope. Massive PE: hypotension, RV strain, hypoxia not responding to O2. Wells score helps stratify. A normal SpO2 does NOT rule out PE.' },
      { front: 'Drowning physiology and management', back: 'Aspiration washes out surfactant and causes pulmonary edema (fresh AND salt - the old hypotonic vs hypertonic teaching is largely irrelevant clinically). Hypoxia is the killer. Even minor aspiration can cause delayed pulmonary edema 4 to 8 hours later. Asymptomatic drowning patients still need observation. CPAP early if any respiratory symptoms.' },
      { front: 'Smoke inhalation, three concerns', back: '1) Thermal injury (upper airway swelling - watch for soot in nares, singed nasal hairs, hoarseness). 2) CO poisoning (treat with 100% O2, SpO2 reads falsely normal). 3) Cyanide (from burning plastics - hydroxocobalamin). Intubate EARLY if any airway burn signs - the swelling closes the airway in hours.' },
      { front: 'Pulse oximetry, where it lies', back: 'False high: CO poisoning (reads 100% in dead patients), methemoglobinemia (caps around 85%), nail polish, severe anemia. False low: motion, cold extremities, hypotension, dark skin tone (FDA warning). Always correlate with clinical picture and ETCO2. SpO2 of 95% in a CO patient means nothing.' },
      { front: 'Auto-PEEP / breath stacking in obstructive disease', back: 'In severe asthma/COPD, exhalation is too slow. Next breath stacks on top before air fully escapes. Pressure climbs, BP drops, can cause PEA arrest. Fix: DISCONNECT BVM/vent, push on chest to force exhalation, then ventilate at slow rate (6-8/min) with long expiratory time (1:4 or 1:5 I:E). Permissive hypercapnia is OK.' },
      { front: 'Difficult airway recognition: LEMON', back: 'Look externally (trauma, beard, big tongue, small mandible). Evaluate 3-3-2 (3 fingers in mouth, 3 fingers chin to hyoid, 2 fingers hyoid to thyroid). Mallampati class. Obstruction (stridor, swelling, foreign body). Neck mobility. Failing any of these = backup plan ready before you push paralytic.' },
      { front: 'Croup vs epiglottitis bedside differentiation', back: 'Croup: viral, 6mo-3yr, barking cough, gradual onset, low fever, child looks ok between coughs, drooling rare. Tx: cool mist, dexamethasone, racemic epi if stridor at rest. Epiglottitis: bacterial, sudden, high fever, tripod, drooling, NO COUGH, toxic appearance. NEVER agitate, do not look in throat. Get to OR for controlled airway.' },
      { front: 'PEEP - what it does and what it costs', back: 'Positive end-expiratory pressure keeps alveoli open at end of exhalation. Improves oxygenation in ARDS, pulmonary edema, atelectasis. Cost: increased intrathoracic pressure decreases venous return and cardiac output. In hypovolemic patients PEEP can drop BP fast. Standard 5 cmH2O. Titrate up for refractory hypoxia, watch hemodynamics.' },
      { front: 'Foreign body airway obstruction by age', back: 'Conscious infant under 1: 5 back blows + 5 chest thrusts, repeat. NO abdominal thrusts (liver injury risk). Conscious child over 1: abdominal thrusts. Unconscious: CPR with airway look on each ventilation - blind finger sweep contraindicated, only remove visible objects. Common culprits: hot dogs, grapes, nuts, balloons. Magnets and button batteries are esophageal emergencies.' },
      { front: 'Suction time and pressure limits', back: 'Adult: max 15 sec suction time, 100-150 mmHg pressure. Peds: 10 sec, 80-100 mmHg. Infant: 5 sec, 60-80 mmHg. Insert WITHOUT suction, withdraw WITH suction. Hyperoxygenate before. Vagal stimulation can drop HR especially in peds, be ready to stop if bradycardic. Closed suction for vented patients.' },
      { front: 'Asthma severe vs life-threatening, the bedside calls', back: 'Severe: cant complete sentences, RR over 30, HR over 120, peak flow under 50% predicted, accessory muscles. Life-threatening: silent chest (no air movement = no wheeze), exhaustion, altered mental status, cyanosis, paradoxical chest, bradycardia, hypotension. Silent chest is NOT good. They cannot move air.' },
      { front: 'Asthma drug ladder for severe attack', back: 'Albuterol nebulizer (or MDI with spacer if mild). Add ipratropium for moderate-severe (combined gives more bronchodilation than either alone). IM epinephrine 0.3-0.5 mg if life-threatening or no response. IV magnesium 2 g over 20 min. Steroids early (methylprednisolone 125 mg IV). Avoid intubation unless absolutely necessary, these patients are extremely hard to ventilate.' },
      { front: 'Capnography in cardiac arrest, three uses', back: '1) ETT confirmation: any waveform with CO2 = tube in trachea (not esophagus). 2) CPR quality: ETCO2 under 10 = compressions are not generating perfusion. Push harder, push faster. 3) ROSC detection: sudden rise to 35-45 = circulation returned, often before pulse is palpable. Watch the number, dont stop CPR until you see it sustained.' },
      { front: 'CPAP vs BiPAP - when each shines', back: 'CPAP: single pressure throughout cycle. Best for CHF/pulmonary edema, OSA. Recruits alveoli, reduces preload (helpful in CHF). BiPAP: separate IPAP and EPAP. Adds support during inspiration - better for COPD where work of breathing is the killer. BiPAP also better for hypercapnic failure since the IPAP drives ventilation.' },
      { front: 'Tracheal deviation - which way means what', back: 'Tension pneumothorax: trachea pushed AWAY from affected side (tension is pushing things away). Massive atelectasis or pneumonectomy: trachea pulled TOWARD affected side (collapsed lung pulls things in). Tracheal deviation in tension pneumo is a LATE sign - by the time you see it, the patient is crashing. Decompress on suspicion, not on tracheal deviation.' },
      { front: 'Sellick maneuver - current evidence', back: 'Cricoid pressure during intubation to occlude esophagus and reduce aspiration. Current evidence is mixed; many systems have dropped it because it can worsen view and cause esophageal injury. If used: 10N pre-induction, 30N once unconscious, release if intubation difficult or active vomiting. AHA does NOT recommend during cardiac arrest.' },
      { front: 'Oxygen device delivery percentages', back: 'NC 1-6 L/min: 24-44%. Simple mask 6-10: 35-60%. NRB 10-15: 60-90%. Venturi: precise FiO2 (24, 28, 31, 35, 40%). High-flow NC (HFNC) up to 60 L/min, FiO2 near 100%, also provides PEEP-like effect. CPAP: up to 100%. BVM with reservoir at 15 L/min: near 100%.' },
      { front: 'Peak vs plateau pressure on ventilator - what each tells you', back: 'Peak pressure - plateau pressure = airway resistance. Wide gap (over 10) = high resistance: bronchospasm, mucus plug, kinked tube, biting on tube. Treat with bronchodilators, suction, check tube position. High plateau pressure (over 30) = compliance problem: ARDS, pulmonary edema, pneumothorax, abdominal compartment syndrome. Different fixes.' }
    ],
    scenarios: [
      {
        q: 'You respond for a 4-year-old with sudden fever, drooling, tripod positioning, and inspiratory stridor. Mom says he would not eat dinner and seems to be getting worse. What is your priority action?',
        opts: [
          'Attempt direct visualization of the airway with a laryngoscope',
          'Keep the child calm in position of comfort with blow-by oxygen and transport rapidly',
          'Begin aggressive BVM ventilation to prevent respiratory failure',
          'Establish IV access and administer IM epinephrine 0.3 mg'
        ],
        ans: 1,
        exp: {
          correct: 'This is classic epiglottitis, the "4 Ds": Drooling, Dysphagia, Dysphonia, Distress, plus tripod position and fever in a young child. The supraglottic structures can swell to complete obstruction in minutes. The only priority is NOT triggering that obstruction. Let him stay in position of comfort (usually with mom), blow-by oxygen without a mask that might agitate him, and rapid transport to a facility with pediatric airway capability for OR intubation with anesthesia and ENT backup and a surgical airway ready.',
          wrong: {
            0: 'Direct laryngoscopy will almost certainly trigger laryngospasm and complete airway obstruction. Epiglottitis is a clinical diagnosis, not one you confirm visually in the field, and often not even in the ED until the patient is in the OR with surgical airway capability standing by.',
            2: 'He is moving air and protecting his airway right now. Aggressive BVM requires positioning him supine and fighting him, both of which can close the airway. BVM becomes appropriate only if he actually loses his airway, not preemptively.',
            3: 'IV starts agitate kids and agitation closes epiglottitis airways. Epinephrine IM is the treatment for anaphylaxis or severe croup, not epiglottitis. Definitive treatment is antibiotics and a secured airway in a controlled setting.'
          },
          pearl: 'Hib vaccine dropped pediatric epiglottitis rates dramatically, but unvaccinated kids, immunocompromised patients, and adults (strep and other organisms) still get it. Your hands stay off the airway. Keep him calm, let mom hold him, and move.'
        }
      },
      {
        q: 'A 68-year-old with known COPD is in respiratory distress. RR 28, SpO2 86% on room air, using accessory muscles, speaking three words at a time, alert and cooperative, SBP 138. Next step?',
        opts: [
          'Intubate with RSI',
          'Apply CPAP at 5 cm H2O',
          'Begin BVM-assisted ventilation',
          'Place on NRB at 15 LPM only'
        ],
        ans: 1,
        exp: {
          correct: 'He meets every CPAP criterion: awake, cooperative, protecting his own airway, SBP over 90. In COPD exacerbation the problem is air trapping, high work of breathing, and CO2 retention. CPAP splints the airways open during exhalation, reduces the effort of every breath, and improves gas exchange. Studies show CPAP/BiPAP prevents intubation in more than half of COPD cases that would otherwise need a tube.',
          wrong: {
            0: 'Intubation is the endgame if CPAP fails or he decompensates. Jumping to RSI on a patient who is awake, cooperative, and meets CPAP criteria is aggressive and adds ventilator complications he might not need.',
            2: 'He is still ventilating on his own (speaking, alert). BVM is for failed ventilation, not for assisting someone with preserved drive who can tolerate CPAP.',
            3: 'A non-rebreather delivers oxygen but does nothing for work of breathing. In COPD, work of breathing is what is killing him. An NRB alone treats the number on the pulse ox, not the patient.'
          },
          pearl: 'Start CPAP at 5 cm H2O. Watch for hypotension since it can drop preload. Do not use in suspected pneumothorax, major thoracic trauma, active vomiting risk, or patients who cannot protect their airway.'
        }
      },
      {
        q: 'You are ventilating a 30-year-old adult in cardiac arrest. You just placed a supraglottic airway. What is your ventilation rate?',
        opts: [
          '1 breath every 2 seconds',
          '1 breath every 3 to 4 seconds',
          '1 breath every 6 seconds',
          '1 breath every 10 seconds'
        ],
        ans: 2,
        exp: {
          correct: 'Post advanced airway placement in adult cardiac arrest: 10 breaths per minute, one every 6 seconds. Continuous compressions without pausing for ventilation, which is the entire point of the advanced airway. No more 30:2 interruptions.',
          wrong: {
            0: 'One every 2 seconds is 30 breaths per minute. Massive hyperventilation. Increases intrathoracic pressure, decreases venous return, kills coronary perfusion pressure. Kills the patient.',
            1: 'One every 3 to 4 seconds is 15 to 20 per minute. Still too fast for adult arrest. Same problems as above.',
            3: 'One every 10 seconds is 6 per minute. Too slow and risks hypoxemia during an already critical period.'
          },
          pearl: 'Hyperventilation during arrest was one of the biggest silent killers in older ACLS. The mental cue: squeeze the bag, wait, wait, wait, wait, wait, squeeze. If you are counting slow, you are probably right.'
        }
      },
      {
        q: 'A severe asthmatic stops wheezing, becomes drowsy, and her SpO2 drops. What does this silent chest indicate?',
        opts: [
          'The treatment is working',
          'Improvement in bronchospasm',
          'Impending respiratory arrest',
          'Developing pneumothorax'
        ],
        ans: 2,
        exp: {
          correct: 'Silent chest in severe asthma is the scariest finding in the room. Normal asthma wheezes because air is moving through constricted tubes. When there is no wheeze but the patient is clearly in distress, air is barely moving at all. Altered mental status (drowsy) and falling SpO2 confirm it. Immediate aggressive treatment: continuous albuterol and ipratropium, IM epinephrine 0.3 mg, IV magnesium, and be prepared to intubate.',
          wrong: {
            0: 'If treatment were working, work of breathing would decrease AND SpO2 would rise AND mental status would improve. All three markers are going the wrong direction.',
            1: 'Same reasoning. Improved bronchospasm equals improved air movement equals louder sounds, not silence, with better vitals.',
            3: 'Pneumothorax is possible (asthmatics can pop one), but usually presents with unilateral findings: tracheal deviation, hyperresonance, unilateral decreased sounds. This is a bilateral silent chest from total bronchospasm.'
          },
          pearl: 'Life-threatening asthma markers: silent chest, altered mental status, exhaustion, unable to speak, cyanosis, SpO2 under 92%. By the time you see these, you are already behind and need to be aggressive, not waiting for classic signs to worsen.'
        }
      },
      {
        q: 'A 6-year-old requires intubation. Using standard formulas, what uncuffed ETT size do you select?',
        opts: ['4.5 mm', '5.0 mm', '5.5 mm', '6.5 mm'],
        ans: 2,
        exp: {
          correct: '(Age in years / 4) + 4 for uncuffed tubes. 6/4 + 4 = 1.5 + 4 = 5.5 mm. Depth at lip is roughly tube size x 3 = 16.5 cm. For cuffed tubes, subtract 0.5 mm from the formula.',
          wrong: {
            0: '4.5 mm is appropriate for about a 2-year-old. Too small here, creates a big air leak and poor ventilation.',
            1: '5.0 mm fits about a 4-year-old. Close, but a hair small for a 6-year-old.',
            3: '6.5 mm is too big. Risks laryngeal trauma, subglottic edema, and post-extubation stridor.'
          },
          pearl: 'If a Broselow length-based tape is available, USE IT over age-based formulas. Kids come in all sizes and the tape accounts for actual body size, which is far more predictive of tube size than birthday.'
        }
      },
      {
        q: 'You have a ventilator-dependent patient at home whose SpO2 is dropping and who appears agitated. The ventilator is cycling normally. What do you do first?',
        opts: [
          'Increase the FiO2 on the ventilator',
          'Disconnect the ventilator and bag the patient with 100% O2',
          'Administer a sedative to calm the patient',
          'Check the ventilator tubing for leaks'
        ],
        ans: 1,
        exp: {
          correct: 'DOPE mnemonic: Displacement, Obstruction, Pneumothorax, Equipment failure. When a vent-dependent patient deteriorates and the machine looks fine, do not trust the machine. Take them off and bag with 100% O2. This immediately rules out equipment issues AND lets you feel compliance directly through the bag. If bagging fixes it, it was the vent or tubing. If bagging is hard, think obstruction or pneumothorax. If still crashing, think displacement.',
          wrong: {
            0: 'Cranking FiO2 masks the problem. If the tube is mucus-plugged or the cuff is leaking, more oxygen through a compromised system does not help.',
            2: 'Sedating a hypoxic patient is dangerous. Agitation is often a sign of hypoxia or pain, not a primary psych issue. Fix the physiology before sedating.',
            3: 'Checking tubing is reasonable as a step, but not the first one. Disconnecting and bagging both rules out equipment AND delivers a therapeutic breath immediately.'
          },
          pearl: 'Always bring your own BVM to a vent patient call. Every vent-dependent patient should have a home "what to do if they crash" plan from their respiratory therapy team. Ask for it on arrival.'
        }
      },
      {
        q: 'A 68 y/o male, 130 kg actual weight, 80 kg ideal body weight, in cardiac arrest. ETT placed. Partner is bagging at 14/min with full-bag squeezes (~800 mL each). ETCO2 reads 9 mmHg. Four minutes in, no ROSC. What is the MOST important immediate change?',
        opts: [
          'Increase epinephrine to 2 mg every 3 to 5 min',
          'Slow ventilation to 10/min and reduce volume to ~500 mL (6 to 7 mL/kg ideal body weight)',
          'Stop ventilation entirely and do compressions only',
          'Push 1 amp of sodium bicarbonate'
        ],
        ans: 1,
        exp: {
          correct: 'Hyperventilation in arrest is one of the most lethal common errors. Rate must be 10/min, volume must be IBW-based (6 to 8 mL/kg). The ETCO2 of 9 is the smoking gun - coronary perfusion pressure is gone, almost certainly because the bagger is destroying venous return with high rate and big tidal volumes. Slow it down, smaller volumes, watch the ETCO2 climb.',
          wrong: {
            0: 'Wrong dose. Standard arrest epi is 1 mg every 3-5 min and doubling does not improve outcomes - it worsens post-ROSC dysfunction. The problem here is mechanical (bad ventilation/perfusion), not pharmacologic.',
            2: 'Once an advanced airway is in, asynchronous ventilation at 10/min with continuous compressions is standard. Stopping ventilation entirely abandons oxygenation. Fix the rate and volume, dont eliminate breaths.',
            3: 'Routine bicarb in arrest is not recommended. Reserve for known hyperkalemia, TCA OD, or prolonged downtime with documented severe acidosis. Will not fix the ventilation problem.'
          },
          pearl: 'In arrest, use IDEAL body weight not actual weight for tidal volumes. The 130 kg patient and the 80 kg patient with the same lungs need the same volumes. Overinflating obese patients in arrest is a fast way to kill any chance of ROSC.'
        }
      },
      {
        q: 'A 58 y/o COPD patient on home O2. Hours of worsening dyspnea, accessory muscle use, can speak only 2 to 3 words at a time. SpO2 78% on his usual 2L. He is alert, sitting up, oriented. SBP 142, HR 118. Best next step?',
        opts: [
          'RSI and intubate immediately',
          'CPAP 5 cm H2O, titrate to comfort and SpO2 88 to 92%',
          'NRB at 15 L/min only, no positive pressure',
          'BVM ventilate at 14/min'
        ],
        ans: 1,
        exp: {
          correct: 'He meets every CPAP criterion: awake, cooperative, protecting airway, SBP over 90. In COPD exacerbation, the killer is work of breathing and air trapping. CPAP splints airways open, drops the work of breathing, and improves gas exchange. Evidence is strong - CPAP/BiPAP prevents intubation in over half of COPD exacerbations that would otherwise need a tube.',
          wrong: {
            0: 'Tube him only if he fails or decompensates. Going straight to RSI on a cooperative patient who meets CPAP criteria is aggressive and adds vent complications he might not need.',
            2: 'NRB delivers oxygen but does nothing for work of breathing, which is what is killing him. Treats the pulse ox number, not the patient.',
            3: 'He is still ventilating. BVM is for failed ventilation, not for assisting someone with preserved drive who can tolerate noninvasive support.'
          },
          pearl: 'Start CPAP at 5 cm H2O. Watch BP - it can drop preload. Avoid in suspected pneumothorax, major thoracic trauma, vomiting risk, or patients who cannot protect airway. Titrate target to 88 to 92% SpO2 in known retainers.'
        }
      },
      {
        q: 'A 4 y/o with sudden fever 103.4F, drooling, refusing to lie down, tripod posture, SpO2 92% RA. Symptoms started 6 hours ago. No cough. What is your IMMEDIATE priority?',
        opts: [
          'Visualize the airway with a tongue blade to assess swelling',
          'Keep him calm in mom arms, blow-by O2, expedite transport, alert receiving for OR setup',
          'IV access and dexamethasone for the airway swelling',
          'Attempt intubation in the back of the truck'
        ],
        ans: 1,
        exp: {
          correct: 'Suspected epiglottitis: minimize stimulation, mom holds him, sit upright (his position of comfort), blow-by O2 (do not force a mask), transport rapidly to facility prepared for controlled airway in the OR with anesthesia and ENT. IVs and procedures wait until he has an airway. Disturb him and the airway closes.',
          wrong: {
            0: 'Examining the throat in suspected epiglottitis can trigger laryngospasm and complete airway obstruction. NEVER look in the throat. NEVER lie them down. NEVER agitate.',
            2: 'IV insertion will agitate him and may precipitate complete airway obstruction. The airway is the priority and that is established in the OR, not the field. Dex/racemic epi is for croup, not epiglottitis.',
            3: 'Field intubation of epiglottitis is high-risk - distorted anatomy, swollen tissues, easy to make worse. Unless the airway is closing in front of you, transport to controlled environment.'
          },
          pearl: 'Epiglottitis is rare since the Hib vaccine but still happens, especially in unvaccinated kids and adults. The 4 Ds are drooling, dysphagia, dysphonia, distress. Hands off until the OR.'
        }
      },
      {
        q: 'You are about to intubate a 95 kg, 32-year-old septic patient. SpO2 91% on 15L NRB. RR 32. You preoxygenate for 3 min and place an NC at 15 L/min for apneic oxygenation. Why does this NC matter?',
        opts: [
          'It scrubs CO2 during the apneic period',
          'It maintains alveolar O2 stores so safe apnea time extends from ~1 minute to several minutes',
          'It increases minute ventilation while paralyzed',
          'It is just standard practice with no evidence behind it'
        ],
        ans: 1,
        exp: {
          correct: 'Apneic oxygenation works because oxygen continues to diffuse passively from alveoli to bloodstream during apnea (about 250 mL/min consumed). High-flow O2 at the airway maintains alveolar O2 stores even without ventilation. In sick patients with low FRC and high O2 demand, this can extend safe apnea from 1 minute to 5+ minutes - the difference between safe intubation and a hypoxic emergency.',
          wrong: {
            0: 'Apneic oxygenation does NOT remove CO2. CO2 will rise during apnea (about 3 mmHg/min). The point is buying time on the oxygen side, not the ventilation side.',
            2: 'Minute ventilation requires actual chest movement. The patient is paralyzed - there is no minute ventilation. The mechanism is passive diffusion, not active ventilation.',
            3: 'This is supported by multiple trials including FELLOW and others. Safe apnea time extension is real, especially in obese, pregnant, or critically ill patients.'
          },
          pearl: 'Apneic ox costs nothing, has no downside, and buys you time. Set up the NC at 15 L/min BEFORE first attempt, not after a desat. Use it on every RSI.'
        }
      },
      {
        q: 'A patient on the vent has peak airway pressure 38 (high), plateau pressure 18 (normal). What does this tell you about the lung problem?',
        opts: [
          'Decreased lung compliance from ARDS, pulmonary edema, or pneumonia',
          'Increased airway resistance from bronchospasm, mucus plug, kinked or bitten tube',
          'Pneumothorax',
          'Auto-PEEP'
        ],
        ans: 1,
        exp: {
          correct: 'Peak minus plateau equals airway resistance. Normal gradient is 5 to 10. Here the gap is 20 - thats a resistance problem. Causes: bronchospasm, mucus plugging, secretions, kinked or bitten ETT, foreign body. Fix with bronchodilators, suction, and tube check.',
          wrong: {
            0: 'Decreased compliance shows up as elevated PLATEAU pressure (the static pressure during inspiratory hold). This patients plateau is normal at 18.',
            2: 'Pneumothorax raises plateau pressure (compliance issue). Normal plateau argues against pneumo.',
            3: 'Auto-PEEP is detected by checking expiratory flow not returning to zero or by an expiratory hold maneuver. Not the primary read from peak vs plateau alone, though high resistance can cause auto-PEEP secondarily.'
          },
          pearl: 'Memorize this distinction. Peak high + plateau normal = resistance (think tube, bronchospasm). Peak high + plateau high = compliance (think ARDS, pneumo, edema). Different fixes. The wrong fix wastes time the patient does not have.'
        }
      },
      {
        q: 'A 28 y/o severe asthmatic, on the vent post-intubation. Suddenly BP drops from 110/70 to 70/40, SpO2 holds at 94%, lungs hard to bag. What is the MOST likely cause and immediate action?',
        opts: [
          'Tension pneumothorax, decompress immediately',
          'Auto-PEEP / breath stacking, disconnect from ventilator and let air out',
          'Hypovolemia, push 1 L crystalloid',
          'Anaphylaxis to a med, push epi'
        ],
        ans: 1,
        exp: {
          correct: 'Severe asthmatics on positive pressure ventilation are at high risk for breath stacking. Rate is too high or expiratory time too short, air cant fully exhale before next breath, intrathoracic pressure climbs, venous return drops, BP crashes. The fix is brutally simple: disconnect from the vent, push on the chest to force exhalation, then resume ventilation at SLOWER rate (6 to 8/min) and longer I:E ratio (1:4 or 1:5). Permissive hypercapnia is fine.',
          wrong: {
            0: 'Tension is in the differential but auto-PEEP is more common in this exact setup and is reversible by simply disconnecting. If disconnect and chest push do not fix it in 10 to 20 seconds, then look at pneumo. Both can coexist.',
            2: 'Volume is reasonable as a backup, but the acute problem is intrathoracic pressure, not preload. Volume without disconnecting wont fix it.',
            3: 'Possible but anaphylaxis usually has airway and skin findings. Auto-PEEP fits the picture better in a fresh-intubated asthmatic.'
          },
          pearl: 'For ventilated asthmatics: low rate, low tidal volume, long expiratory time, accept the hypercapnia. Disconnect-and-press is the trick that has saved a lot of lives in a lot of ED bays.'
        }
      },
      {
        q: 'A 22 y/o thin male presents with sudden right chest pain and dyspnea while watching TV. RR 24, SpO2 92%, BP 118/72, HR 102, breath sounds diminished on the right, no JVD, no tracheal deviation. Most likely diagnosis and disposition?',
        opts: [
          'Tension pneumothorax, immediate needle decompression',
          'Spontaneous primary pneumothorax, transport for chest tube vs observation depending on size',
          'Pulmonary embolism, anticoagulation',
          'Costochondritis, NSAIDs and reassurance'
        ],
        ans: 1,
        exp: {
          correct: 'Classic primary spontaneous pneumothorax: tall thin young male, sudden onset at rest, diminished breath sounds, mild hypoxia. He is HEMODYNAMICALLY STABLE - no tension findings (no JVD, no tracheal deviation, BP fine). Management is small-bore chest tube or pigtail catheter for symptomatic / large pneumos, observation for small ones. CT or upright PA chest will size it.',
          wrong: {
            0: 'Tension pneumo requires hemodynamic compromise (hypotension), severe distress, JVD, or tracheal deviation. He has none of those. Decompressing a stable simple pneumo creates an iatrogenic problem and risks lung injury.',
            2: 'PE can present similarly but the physical exam (unilateral diminished breath sounds in a thin young man at rest) makes pneumothorax more likely. PE typically does not cause unilateral diminished breath sounds.',
            3: 'Costochondritis does not drop SpO2 or cause unilateral diminished breath sounds. Missing pneumothorax for chest wall pain is a common pitfall.'
          },
          pearl: 'Rule of thumb: spontaneous pneumo in tall thin young males. Dont treat all pneumos as tension. Tension is a clinical diagnosis based on hemodynamic compromise, not on the size of the pneumo on imaging.'
        }
      },
      {
        q: 'A 45 y/o anaphylaxis patient, given IM epi 0.3 mg 2 minutes ago. Voice now hoarse, lip swelling progressing. SpO2 96%, BP 88/54, HR 130, mild stridor. Next priority?',
        opts: [
          'Repeat IM epi, prepare for airway intervention while you can still see anatomy',
          'Wait 5 more minutes for the first epi to work',
          'Push IV diphenhydramine and methylprednisolone, hold off on more epi',
          'Intubate later in the ED, not in the field'
        ],
        ans: 0,
        exp: {
          correct: 'Anaphylaxis with progressing airway involvement and hypotension after one dose of epi - repeat epi every 5 to 15 minutes if symptoms not resolving, and prepare for airway NOW. The window where intubation is technically possible is closing fast. Get gear out, position, plan A/B/C (DL, video, surgical airway) before you push paralytic. Stridor and voice change mean swelling is well underway.',
          wrong: {
            1: 'Waiting risks losing the airway. Anaphylaxis can progress despite first epi. The standard is repeat in 5 to 15 min if symptoms persist or worsen, and intervene early on the airway.',
            2: 'Antihistamines and steroids are SECOND LINE. They take 30+ minutes to work. They do not save lives in anaphylaxis. Epi does. Never substitute them for epi.',
            3: 'Once swelling is significant you may not BE ABLE to intubate. Anaphylactic airways are a one-shot, and they can close mid-flight. Better to act when you still have anatomy to see.'
          },
          pearl: 'In anaphylaxis: epi early, epi often, prepare surgical airway before you need it. Antihistamines and steroids are adjuncts, not treatment. The surgical airway in an anaphylactic patient is a real procedure - know your anatomy and have the gear ready before you ever put a tube in.'
        }
      },
      {
        q: 'A 6 y/o with severe asthma. RR 38, SpO2 88% on 15L NRB, accessory muscles, can speak only single words. Albuterol/ipratropium nebulizer running, IM epi given, IV mag started. Now you notice his wheezes are quieter than 5 min ago. Next concern?',
        opts: [
          'He is responding to treatment, continue and reassess',
          'Silent chest is a sign of impending respiratory failure, prepare to intubate',
          'Wean the oxygen since he is improving',
          'Hold further treatment and monitor'
        ],
        ans: 1,
        exp: {
          correct: 'In a severe asthmatic who is NOT improving clinically, quieter wheezing is ominous - it means less air movement, not less bronchospasm. Combined with single-word speech, accessory muscles, and persistent hypoxia, this is impending respiratory failure. Get the intubation kit out, apply ketamine if available (bronchodilatory), prepare for a difficult vent setting (low rate, long exhalation, permissive hypercapnia).',
          wrong: {
            0: 'Wheezes get LOUDER as airways open up. Quieter wheezes plus persistent severe symptoms is the opposite of improvement. Misreading this kills kids.',
            2: 'He is at 88% on 15L. Weaning oxygen now would be reckless. Continue and prepare to escalate.',
            3: 'Holding treatment in a deteriorating asthmatic is dangerous. He needs more, not less - more bronchodilators, mag, possibly heliox, possibly intubation.'
          },
          pearl: 'Silent chest = death if missed. The asthmatic who is too quiet is not improving, they are dying. Trust mental status, RR, work of breathing, and SpO2 trends - not just the lung sounds.'
        }
      },
      {
        q: 'A 72 y/o post-CABG patient with CHF presents with severe dyspnea, pink frothy sputum, RR 36, SpO2 84% on 15L NRB, BP 178/102, HR 122, lungs full of crackles. Best initial intervention?',
        opts: [
          'CPAP at 10 cm H2O',
          'IV furosemide 40 mg first, then maybe CPAP',
          'IV morphine for anxiety',
          'BVM ventilation'
        ],
        ans: 0,
        exp: {
          correct: 'Acute cardiogenic pulmonary edema. CPAP is the FIRST move. It opens flooded alveoli, reduces preload (helpful here - he is hypertensive and overloaded), reduces afterload, and dramatically reduces work of breathing. It works fast, often within minutes. Add nitroglycerin for preload/afterload reduction. Lasix has slower onset (15 to 30 min for diuretic effect) and works on volume, not the immediate respiratory failure.',
          wrong: {
            1: 'Lasix is part of the plan but not the immediate fix. Onset is 15 to 30 min for diuresis. CPAP buys him minutes when minutes are what he has. Then add lasix.',
            2: 'Old EMS dogma. Morphine in CHF is no longer recommended (some evidence of harm). It depresses respiratory drive and does not address the underlying problem. Skip it.',
            3: 'BVM is an escalation if CPAP fails or he loses consciousness. Try CPAP first - it works in this exact pathology.'
          },
          pearl: 'In flash pulmonary edema: CPAP + nitro is the classic combo. Watch BP closely. If BP is fine and oxygenation does not improve in 5 to 10 min on CPAP, escalate. Lasix matters but is not what saves him in the first 15 minutes.'
        }
      },
      {
        q: 'You are intubating a 350 lb patient. After preoxygenation and apneic ox, first attempt fails. SpO2 95%. You attempt BVM and cannot ventilate. What is your NEXT step?',
        opts: [
          'Reattempt direct laryngoscopy immediately, since the first attempt was close',
          'Place a supraglottic airway (LMA or i-gel) to oxygenate, then plan rescue',
          'Cricothyrotomy now',
          'Hyperventilate harder with the BVM to force air through'
        ],
        ans: 1,
        exp: {
          correct: 'Cant intubate, cant BVM = airway emergency. Per the difficult airway algorithm, the next step is a SUPRAGLOTTIC AIRWAY (LMA, i-gel, King). It buys time and oxygenation in seconds. If supraglottic fails, you escalate to surgical airway. Going straight to crich without trying supraglottic skips a step. Repeat DL when youre already failing oxygenation can desat the patient further.',
          wrong: {
            0: 'Repeat DL while desaturating risks catastrophic hypoxia. Get an oxygenating device in (supraglottic) first, then come back to definitive airway with a fresh plan.',
            2: 'Crich is for cant intubate, cant oxygenate AFTER supraglottic has failed. You havent tried supraglottic yet. Skipping creates an iatrogenic neck wound on a patient you might have rescued with an LMA.',
            3: 'Forcing more air through an obstructed airway just inflates the stomach, worsens aspiration risk, and does not improve oxygenation. The path is to bypass the obstruction with a supraglottic.'
          },
          pearl: 'Memorize: BVM fails -> supraglottic -> surgical. Each step is faster and more invasive. The supraglottic is your best friend in obese, edematous, or anatomically tough airways. Have one out and ready before every RSI.'
        }
      },
      {
        q: 'A 34 y/o trans-Atlantic flier, leg swelling for 2 days, now sudden severe dyspnea on standing up at baggage claim. RR 28, SpO2 90% RA, BP 92/58, HR 122. Lungs clear bilaterally. EKG shows S1Q3T3 pattern. Most concerning diagnosis and BP-related management?',
        opts: [
          'PE; if BP drops further, consider thrombolytics',
          'MI; load aspirin and start heparin',
          'Pneumonia; antibiotics and admit',
          'Anxiety; benzo and reassurance'
        ],
        ans: 0,
        exp: {
          correct: 'Massive PE - long flight, leg swelling, sudden severe dyspnea, hypoxia not explained by lung exam, hypotension/RV strain pattern on EKG. This is a hemodynamically significant PE. Anticoagulation, oxygen, supportive care. Thrombolytics (or catheter-directed therapy) are considered for hemodynamic instability. Get the CTA when stable enough to scan, or echo if you cant.',
          wrong: {
            1: 'MI is differential but the leg edema, recent flight, and clear lungs argue strongly for PE. EKG can show similar findings transiently in massive PE (right heart strain). Aspirin is fine but heparin is the same as for PE - chase the actual cause.',
            2: 'Pneumonia would have a fever, focal lung findings, and gradual onset. Sudden hypoxia with clear lungs is PE until proven otherwise.',
            3: 'Hypoxia and hypotension are not anxiety. Calling sudden hypoxia in a recent flier anxiety is how patients die in hallway beds.'
          },
          pearl: 'Hypoxia + clear lungs on auscultation + tachycardia = PE until proven otherwise. EKG is rarely diagnostic but can be supportive. CTA is the test. Massive PE with hypotension or arrest is the place where systemic thrombolytics or catheter-directed clot lysis save lives.'
        }
      },
      {
        q: 'A patient with CO poisoning rescued from a house fire. SpO2 reads 99% on room air. He is somnolent, headache, nausea, looks well-perfused. What does the SpO2 mean and what do you do?',
        opts: [
          'SpO2 is reliable, he is fine, observe',
          'SpO2 is unreliable in CO poisoning, treat with 100% O2 via NRB regardless',
          'Give carbogen (95% O2 / 5% CO2)',
          'Hyperbaric is the only effective treatment, transport now to chamber'
        ],
        ans: 1,
        exp: {
          correct: 'Pulse oximetry CANNOT distinguish carboxyhemoglobin from oxyhemoglobin - they look identical to the sensor. So a "99%" can hide profound CO poisoning. Treatment is high-flow 100% O2 via NRB which drops CO half-life from 4 to 5 hours (room air) to about 60 to 90 min. Get a co-oximetry blood test (carboxyhemoglobin level). Hyperbaric is considered for high levels, neuro symptoms, pregnancy, or persistent symptoms - but treatment with 100% O2 starts now.',
          wrong: {
            0: 'False reassurance from SpO2 in CO poisoning is one of the classic ways patients get sent home and die. Always treat empirically with 100% O2 for any reasonable CO exposure.',
            2: 'Carbogen has been studied; high-flow 100% O2 is the standard prehospital treatment. 5% CO2 to drive ventilation is not the standard.',
            3: 'Hyperbaric is the right next-level treatment for severe cases but not in lieu of immediate 100% O2 in the field. Start O2 NOW, plan for HBO based on symptoms, levels, and pregnancy status.'
          },
          pearl: 'Any unconscious or altered patient pulled from a fire gets 100% O2 until proven otherwise. Same goes for furnace problems in winter, generator-running-in-garage stories, and any cluster of household members all sick at once. The pulse ox lies. The story tells the truth.'
        }
      },
      {
        q: 'A 68 y/o male with end-stage COPD and a tracheostomy from prior intubation. Family calls because he is not breathing well, and the trach tube is partially out. You arrive and find him cyanotic, apneic. His upper airway is patent. What do you do FIRST?',
        opts: [
          'Attempt to reinsert the trach tube',
          'Cover the stoma and BVM via mouth/nose',
          'Run away, this is too complex',
          'Crich him below the trach stoma'
        ],
        ans: 0,
        exp: {
          correct: 'Step one in a tracheostomy emergency is attempt to reinsert the same-size or one-size-smaller trach tube through the stoma. If you cant reinsert, then plan B is to manage the airway based on whether his upper airway is patent. Here it is - so you can BVM via mouth/nose with stoma covered, OR (in some cases) BVM directly over the stoma. But first try to put the trach back in.',
          wrong: {
            1: 'This is the BACKUP if you cant reinsert. First try the trach tube back in. Covering and BVMing the upper airway works only if the upper airway is patent (in this case it is, but in many trach patients its surgically obstructed).',
            2: 'Not a real option. Tracheostomy emergencies have a defined algorithm.',
            3: 'You have a stoma right there. There is no scenario in which a fresh crich is the next move when you have an existing trach site.'
          },
          pearl: 'For trach emergencies: same size first, then smaller, then ETT through stoma if available. If the upper airway is patent, you can also BVM via mouth/nose with stoma covered. Know if the patient has a surgical (intact upper airway potentially absent) versus percutaneous trach - changes your backup plan.'
        }
      },
      {
        q: 'A 35 y/o who took a heroin overdose. Apneic on arrival, pinpoint pupils, BP 92/60, HR 50. Naloxone 0.4 mg IM given by partner. While you wait for response, the patient remains apneic. What is your move?',
        opts: [
          'Wait the full 3 to 5 min for naloxone to work without ventilating',
          'Begin BVM ventilation now while naloxone is working',
          'Push another 4 mg naloxone immediately',
          'Intubate immediately'
        ],
        ans: 1,
        exp: {
          correct: 'BVM NOW. Apnea + bradycardia is going to become arrest if you wait. Naloxone takes 1 to 5 min to work. The whole point of bagging is to bridge the gap. Continue BVM until spontaneous respirations return. Reassess after several minutes, repeat naloxone if still apneic. Goal is restored respirations, not a bouncing patient ready to fight.',
          wrong: {
            0: 'Hypoxic minutes cause anoxic brain injury. Bagging during the wait is mandatory, not optional.',
            2: 'Aggressive naloxone causes precipitated withdrawal: vomiting (aspiration risk), agitation, possible seizures. Titrate to respiration, not to pupils. Big bolus doses of naloxone are bad practice in chronic users.',
            3: 'Premature. Naloxone usually reverses respirations within minutes. Tube only if naloxone fails or respirations dont return.'
          },
          pearl: 'Naloxone targets respiratory depression, not consciousness. Aim for breaths, not for full alertness. A reversed patient who breathes on their own but stays drowsy is a perfectly safe outcome. Forcing them awake is bad medicine and dangerous to everyone in the room.'
        }
      },
      {
        q: 'You are managing a difficult intubation in a patient with massive facial trauma from MVC. Two attempts at DL failed (cant see anything through blood). Video laryngoscope unavailable. Patient is desaturating to 78%. BVM works marginally. Next move?',
        opts: [
          'Third attempt at DL with more aggressive suctioning',
          'Place a supraglottic airway as bridge, then plan for surgical airway',
          'Crich now',
          'Withdraw and transport without an airway'
        ],
        ans: 1,
        exp: {
          correct: 'Two failed DL with worsening saturation = transition to backup. Supraglottic airway (LMA, i-gel) bypasses the upper airway debris and gets you oxygenation in seconds. With facial trauma, plan for a surgical airway as definitive (the supraglottic is a bridge, not a destination, in this anatomy). One critical caveat: aspiration risk is high in trauma, so the supraglottic is suboptimal for definitive but FINE as a bridge to crich.',
          wrong: {
            0: 'Repeat attempts with worsening sats kill patients. The first two failures with massive bleeding tell you direct laryngoscopy is not going to work. Change your plan, dont repeat the failure.',
            2: 'Crich is the destination here, but supraglottic is faster and stabilizes oxygenation while you set up the surgical airway. Skipping straight to crich is reasonable in some scenarios but leaves you blind during prep.',
            3: 'No airway = death in minutes. You have BVM partially working - dont stop airway management.'
          },
          pearl: 'Massive facial trauma is the textbook setup for surgical airway. Plan for it before you even start DL. Have the gear out. Two attempts is your max for DL in this scenario. Be willing to cut.'
        }
      },
      {
        q: 'A patient on the home vent. Caregiver calls, patient looks terrible, pulse ox 80%, blue. You arrive. What do you do FIRST?',
        opts: [
          'Troubleshoot the vent settings',
          'Disconnect from the vent and BVM the patient',
          'Suction the trach',
          'Check vent alarms first'
        ],
        ans: 1,
        exp: {
          correct: 'When a vent-dependent patient crashes, the safest first move is DISCONNECT and BVM. This eliminates the vent as a variable - if BVM works easily and SpO2 climbs, the problem is the vent (settings, circuit, kink, leak). If BVM is hard, problem is the patient (mucus plug, pneumothorax, pneumonia, bronchospasm). Start with the simplest test that separates the two.',
          wrong: {
            0: 'Troubleshooting the vent while patient deteriorates wastes time. Disconnect and bag, then troubleshoot.',
            2: 'Suctioning is in the differential plan but not the FIRST move. Once you BVM and see how the patient ventilates, suction if you suspect plug.',
            3: 'Alarms might tell you something but disconnecting and bagging is faster and more definitive.'
          },
          pearl: 'Vent crisis algorithm: DOPE - Displacement (tube out), Obstruction (mucus, kink), Pneumothorax, Equipment (vent failure). Disconnect-and-bag separates equipment from patient in 30 seconds. After that, work through the rest.'
        }
      },
      {
        q: 'A 50 y/o on chronic steroids, presents with a 4-day cough, fever 102, RR 30, SpO2 89% RA, productive sputum. CXR shows right lower lobe consolidation. After 2 L NS, BP is 90/58, HR 110, lactate 3.4. What is your priority management?',
        opts: [
          'CPAP for the hypoxia',
          'Septic shock from pneumonia: broad-spectrum antibiotics within the hour, fluids, vasopressors if BP doesnt respond',
          'Start a beta-blocker for the tachycardia',
          'Push furosemide for the hypoxia'
        ],
        ans: 1,
        exp: {
          correct: 'Severe sepsis / septic shock from CAP. The hour-1 bundle: blood cultures, broad-spectrum abx (within 1 hour), 30 mL/kg crystalloid, lactate, vasopressors if MAP cant be kept above 65 with fluids. The hypoxia matters but does not change the dominant problem - this patient needs antibiotics within an hour. Surviving Sepsis bundles save lives.',
          wrong: {
            0: 'CPAP could be considered for refractory hypoxia, but it does not treat the underlying pneumonia or the shock. Antibiotics first.',
            2: 'Beta-blockers in shock are wrong - the tachycardia is compensatory. Blocking it crashes the patient.',
            3: 'He is hypovolemic from sepsis, not fluid-overloaded. Lasix here removes the volume he needs. Wrong physiology entirely.'
          },
          pearl: 'Time to antibiotics is the single most powerful variable in septic shock survival. Every hour delay is associated with significant increase in mortality. In CAP with shock, do not wait for CXR or labs to give the antibiotics. Cover broadly, narrow later when cultures speak.'
        }
      },
      {
        q: 'A 4 y/o, 16 kg, drowning victim from backyard pool. Asystole on arrival. Bystander CPR for 8 minutes. ETT in place. What is your MOST important early intervention beyond standard PALS?',
        opts: [
          'Aggressive rewarming if hypothermic',
          'Sodium bicarbonate immediately',
          'Calcium gluconate',
          'High-dose epinephrine'
        ],
        ans: 0,
        exp: {
          correct: 'Drowning victims, especially in cold water, can have profound hypothermia. Patients have made full neurologic recoveries from prolonged cold-water arrest. Rewarming is part of resuscitation, not an afterthought. Get a core temp, remove wet clothes, warm IV fluids, warm humidified O2, continue CPR until rewarmed adequately. The mantra: not dead until WARM and dead.',
          wrong: {
            1: 'Routine bicarb in arrest is not recommended. No outcome benefit in standard arrest.',
            2: 'Calcium is for hyperkalemia, hypocalcemia, calcium channel blocker overdose. Not routine in arrest.',
            3: 'High-dose epi has been studied and does not improve outcomes vs standard dosing in pediatric arrest. Stick with 0.01 mg/kg of 1:10,000.'
          },
          pearl: 'Cold-water drowning: aggressive rewarming, prolonged CPR even when it looks futile. Pediatric brains tolerate hypothermic arrest much longer than adult brains. Do not stop early. Survivors with intact neurology have been documented after 60+ min downtime in cold water.'
        }
      },
      {
        q: 'You arrive to a possible CO exposure: 4 family members feeling unwell, headache, nausea. The home heating system was being repaired. SpO2 readings: 98%, 99%, 99%, 100%. Two adults look mildly altered. What is your action?',
        opts: [
          'SpO2 looks good, transport non-emergent',
          'Move them all out of the home immediately, 100% O2 via NRB to all, transport for co-oximetry',
          'Treat with cyanide kit since heating is involved',
          'Crack open the windows and let them stay'
        ],
        ans: 1,
        exp: {
          correct: 'Multi-victim cluster of similar symptoms in a closed environment with combustion source = CO poisoning. SpO2 is unreliable in CO and reads falsely normal because the sensor cant distinguish carboxyhemoglobin from oxyhemoglobin. Move them out, 100% O2 via NRB drops CO half-life from 4 to 5 hours to 60 to 90 min, transport for co-oximetry to confirm. Hyperbaric O2 considered for severe cases (LOC, neuro symptoms, pregnancy, high levels).',
          wrong: {
            0: 'Patients with CO can have normal SpO2 readings and still die. Do NOT trust the pulse ox. Trust the story: cluster of symptoms, combustion source, closed environment.',
            2: 'Cyanide kit is for cyanide poisoning (typically smoke inhalation from burning plastics). This is a heating problem, classic CO exposure. Cyanide treatment without indication is wrong drug.',
            3: 'Cracking windows does not get them to safety fast enough. Move out of the structure, ventilate the structure separately, get them all on 100% O2 immediately.'
          },
          pearl: 'CO poisoning red flag: multiple people in same building/car with same symptoms. Headache + nausea + cluster = CO until proven otherwise. Pregnant patients are special: fetal Hb has even higher affinity for CO than maternal Hb. Hyperbaric is strongly considered in pregnancy.'
        }
      }

    ]
  },
  {
    id: 'cardio',
    name: 'Cardiology',
    short: 'Cardio',
    desc: 'ACS, dysrhythmias, cardiac arrest, post-ROSC care, hypertensive and hypotensive emergencies.',
    color: '#ef4444',
    colorVar: '--sec-cardio',
    icon: 'heart',
    flashcards: [
      { front: 'STEMI ECG criteria', back: 'ST elevation over 1 mm in 2 or more contiguous limb leads, or over 2 mm precordial V2-V3 (men) / 1.5 mm (women). New LBBB in ischemic context is STEMI equivalent.' },
      { front: 'Mobitz I vs Mobitz II', back: 'Mobitz I (Wenckebach): PR progressively lengthens until a beat drops. Usually benign. Mobitz II: constant PR with random dropped beats. High risk, can progress to complete block. Pacer pads on.' },
      { front: 'Bundle branch block recognition', back: 'QRS over 0.12 s. LBBB: broad R in V6, deep QS in V1 (William). RBBB: RSR prime in V1 (rabbit ears), wide S in V6 (Marrow).' },
      { front: 'Shockable rhythms in cardiac arrest', back: 'VF and pulseless VT only. Defibrillate, resume compressions immediately, epi 1 mg IV q 3 to 5 min, amiodarone 300 mg then 150 mg (or lidocaine).' },
      { front: 'Post-ROSC priorities', back: 'Airway/ventilation (SpO2 92 to 98%, EtCO2 35 to 40). BP SBP over 90 or MAP over 65 (fluids then pressors, norepi). 12-lead looking for STEMI. Targeted temp mgmt. Treat cause.' },
      { front: 'Life-threatening chest pain differentials', back: 'ACS, aortic dissection, pulmonary embolism, tension pneumothorax, cardiac tamponade, esophageal rupture (Boerhaave).' },
      { front: 'Hypertensive emergency vs urgency', back: 'Emergency: high BP WITH end-organ damage (CVA, MI, pulmonary edema, dissection, eclampsia). Urgency: high BP alone. Emergency needs controlled reduction, not an aggressive drop.' },
      { front: 'Starling law of the heart', back: 'Force of ventricular contraction is proportional to end-diastolic fiber length. More preload equals stronger contraction, up to a point.' },
      { front: 'Preload vs afterload definitions', back: 'Preload: volume in ventricles at end-diastole (stretch). Afterload: resistance the ventricle pumps against (SVR for LV, PVR for RV).' },
      { front: 'Cardiogenic shock presentation', back: 'Pump failure. Hypotension with tachycardia, cold clammy skin, pulmonary edema with crackles, JVD. Cautious fluids, norepinephrine, consider inotropes.' },
      { front: 'Aortic dissection classic signs', back: 'Tearing or ripping chest pain radiating to back, BP differential between arms, pulse deficit, widened mediastinum on CXR. Marfan, uncontrolled HTN risk.' },
      { front: 'Manual defibrillation: paddles vs pads', back: 'Pads preferred. Hands-free, continuous monitoring, better contact, safer for provider. Paddles require pressure and gel, higher energy loss.' },
      { front: 'Sgarbossa criteria for MI in LBBB', back: 'In LBBB, normal STEMI rules dont apply. Sgarbossa: 1) concordant ST elevation 1 mm or more in any lead, 2) concordant ST depression 1 mm or more in V1-V3, 3) discordant ST elevation 5 mm or more (modified: ratio of ST/S over 0.25). Score 3+ = high specificity for MI. New LBBB with chest pain still gets cath lab activation in many systems.' },
      { front: 'Right ventricular MI - what changes', back: 'Inferior MI + RV involvement (V4R lead, ST elevation in V4R). RV is preload-dependent. Avoid nitrates and morphine (drop preload, crash BP). Treatment: FLUIDS first (250 to 500 mL boluses), then dobutamine if needed for inotropy. Get cath lab. About 30 to 40% of inferior MIs have RV involvement.' },
      { front: 'Wellens syndrome', back: 'Pattern of biphasic or deeply inverted T waves in V2-V3 (with or without V1, V4) in a patient PAIN FREE at the time of EKG. History of recent chest pain. Indicates critical proximal LAD stenosis. High risk of large anterior MI in days. Stress test will kill them. Goes straight to cath. Easy to miss because EKG looks unimpressive while pain-free.' },
      { front: 'AVRT vs AVNRT and how to differentiate', back: 'Both narrow-complex SVTs with sudden onset. AVNRT: reentry within AV node, P waves buried/inverted/very close to QRS. AVRT: uses an accessory pathway (WPW), sometimes wide complex if antidromic. Treat both with vagal maneuvers, adenosine, then cardioversion if unstable. WPW with afib is a special case - AVOID adenosine, AV nodal blockers, dig - they can speed conduction down the accessory path and degenerate to VF.' },
      { front: 'Wolff-Parkinson-White on ECG', back: 'Short PR (under 120 ms), delta wave (slurred upstroke of QRS), wide QRS. Accessory pathway from atria to ventricles bypassing AV node. Risk: afib through the accessory pathway can produce HRs over 250 and degenerate to VF. WPW with afib: NO AV nodal blockers (no adenosine, no diltiazem, no beta-blocker, no dig). Use procainamide or cardiovert.' },
      { front: 'Cardiac tamponade Becks triad', back: 'Hypotension, JVD, muffled heart sounds. Often INCOMPLETE in real life. Other findings: pulsus paradoxus over 10 mmHg (drop in SBP with inspiration), narrowed pulse pressure, electrical alternans on EKG. Treatment: fluids to maintain preload, pericardiocentesis. Tamponade physiology: extracardiac compression compromises diastolic filling.' },
      { front: 'Pulsus paradoxus - definition and what it means', back: 'Drop in SBP of more than 10 mmHg during inspiration. Found in tamponade, severe asthma, COPD exacerbation, tension pneumothorax, constrictive pericarditis. The "paradox" is that the pulse weakens or disappears during inspiration despite the heart still beating. Useful at the bedside, especially in severe asthma to gauge severity.' },
      { front: 'STEMI mimics on EKG', back: 'Pericarditis (diffuse ST elevation, PR depression, no reciprocal changes), early repolarization (J-point elevation, often in young athletes), LBBB (use Sgarbossa), LV aneurysm (persistent ST elevation post-MI), Brugada, hyperkalemia (peaked T waves can mimic), takotsubo. Always consider in patients with non-typical clinical picture.' },
      { front: 'Cardiac arrest first 5 min - what kills patients', back: 'Lack of high-quality CPR (compression depth and rate, full recoil, minimal interruptions). Hyperventilation (raises intrathoracic pressure, kills coronary perfusion). Long pauses for pulse checks. Failing to defibrillate fast in shockable rhythms. The drugs matter less than people think; CPR quality and time-to-shock are the dominant variables.' },
      { front: 'Push dose pressors - epi and phenylephrine', back: 'Push-dose epi: take 1 mL of 1:10,000 (0.1 mg/mL), put in 9 mL NS, gives 10 mcg/mL. Push 1 to 2 mL (10 to 20 mcg) every 2 to 5 min. Push-dose phenylephrine: 1 mL of 10 mg/mL into 100 mL NS = 100 mcg/mL. Push 0.5 to 2 mL (50 to 200 mcg). Bridge to drip while line is set up.' },
      { front: 'Beta-blocker vs CCB OD distinguishing features', back: 'BB OD: bradycardia, hypotension, HYPOglycemia (especially propranolol). CCB OD (verapamil, diltiazem): bradycardia, hypotension, HYPERglycemia (calcium-mediated insulin release blocked). Both treated similarly: glucagon, calcium, high-dose insulin/euglycemia therapy, lipid emulsion as rescue. The glucose level is the differentiator.' },
      { front: 'Aortic dissection on the differential', back: 'Tearing/ripping chest pain radiating to back, BP differential between arms (over 20 mmHg), pulse deficits, neurologic signs (carotid involvement), hypotension if rupture. Type A (ascending): surgery. Type B (descending): often medical management with strict BP control. Misdiagnosis as MI and giving thrombolytics is fatal.' },
      { front: 'CHF Killip class - prognostic value', back: 'Class I: no signs of heart failure (mortality ~6%). Class II: rales/S3/JVD (~17%). Class III: pulmonary edema (~38%). Class IV: cardiogenic shock (~80% mortality without aggressive intervention). Used for prognosis and to guide aggressiveness of intervention in MI.' },
      { front: 'New afib in young patient - dont miss the cause', back: 'New onset afib in someone under 60 - look for hyperthyroidism, alcohol binge ("holiday heart"), pulmonary embolism, structural heart disease, sepsis, illicit stimulants, electrolyte abnormality. Just rate-controlling without finding the cause misses the disease. Even the rhythm itself may resolve once the cause is treated.' },
      { front: 'CHA2DS2-VASc and what to do with it', back: 'Stroke risk stratification in afib. CHF (1), HTN (1), Age 75+ (2), Diabetes (1), Stroke/TIA (2), Vascular dz (1), Age 65-74 (1), Sex female (1). Score 2+ in men or 3+ in women: anticoagulate. Score 0 in men or 1 in women: no anticoagulation. Bridge with HAS-BLED score (bleeding risk) before deciding.' },
      { front: 'Hyperkalemia EKG progression', back: 'Order of changes as K rises: peaked T waves (5.5-6.5), PR prolongation and P wave flattening (6.5-7.5), wide QRS (7.5-8.5), sine wave (over 9), VF/asystole. Treatment ladder: calcium FIRST (membrane stabilization, immediate), then drive potassium into cells (insulin+D50, beta-agonists, bicarb), then remove potassium (dialysis, kayexalate is slow and questionable).' },
      { front: 'Adenosine practical use - and when not to', back: '6 mg IV push then flush, 12 mg if no response, 12 mg again. Best for narrow-complex SVT (AVNRT, AVRT). Brief asystole expected and is therapeutic. AVOID in: WPW with afib, polymorphic VT, pre-excited tachycardias, suspected wide-complex VT (can degenerate). Tell the patient about chest pressure and brief feeling of doom before pushing.' }
    ],
    scenarios: [
      {
        q: 'A 62-year-old male has crushing substernal chest pain radiating to his left jaw for 45 minutes. BP 158/92, HR 88, SpO2 96%. His 12-lead shows 3 mm ST elevation in II, III, and aVF. What is your priority after ASA and monitor?',
        opts: [
          'Administer sublingual nitroglycerin',
          'Perform a right-sided 12-lead ECG',
          'Give morphine 4 mg IV for pain',
          'Start an amiodarone drip'
        ],
        ans: 1,
        exp: {
          correct: 'ST elevation in II, III, aVF is an inferior STEMI. Up to 40% of inferior MIs involve the right ventricle, which is preload dependent. Before giving nitroglycerin, run a right-sided 12-lead (especially V4R) to rule out RV infarct. If V4R shows ST elevation, AVOID nitro (it drops preload and can crash the BP dramatically in RV infarct) and give fluids instead.',
          wrong: {
            0: 'Nitro is standard for chest pain, but NOT until you rule out RV involvement in an inferior MI. Given blindly in RV infarct, it can drop SBP into the 60s in seconds.',
            2: 'Morphine is fine for pain management later, but it is not the priority. Morphine in ACS has been associated with worse outcomes in some studies and is used judiciously now.',
            3: 'Amiodarone is for ventricular arrhythmias. He is in sinus rhythm with chest pain, not an arrhythmia.'
          },
          pearl: 'ECG territories: Anterior (V1-V4) = LAD = worst prognosis, big anterior wall at risk. Inferior (II, III, aVF) = RCA, check right side AND posterior leads. Lateral (I, aVL, V5-V6) = circumflex.'
        }
      },
      {
        q: 'Your monitor shows a rhythm with regular P waves, PR intervals that progressively lengthen, then a dropped QRS, then the cycle repeats. Patient is asymptomatic, BP 128/76, HR 68. What is the rhythm and action?',
        opts: [
          'Mobitz II, apply pacer pads',
          'Third-degree block, begin transcutaneous pacing',
          'Mobitz I (Wenckebach), monitor and transport',
          'Normal sinus with PACs, no treatment'
        ],
        ans: 2,
        exp: {
          correct: 'Mobitz I (Wenckebach) shows progressive PR lengthening followed by a dropped QRS, then the cycle resets. Conduction problem at the AV node itself, usually benign, usually does not progress to complete block. Patient is asymptomatic. Monitor, transport, pace only if symptomatic bradycardia develops.',
          wrong: {
            0: 'Mobitz II has a CONSTANT PR interval with random dropped beats, not progressive lengthening. Mobitz II is high risk for progression to complete heart block, so pads go on. This rhythm is not that.',
            1: 'Third-degree (complete) block has NO relationship between P waves and QRS. P waves and QRS march independently at their own rates. This rhythm has a clear P-to-QRS relationship with progressive PR changes.',
            3: 'PACs are premature ectopic beats from the atria, showing up early with different P-wave morphology. This rhythm has regular P waves with progressive PR lengthening, not premature beats.'
          },
          pearl: 'Mnemonic: "Longer, longer, longer, drop, then you have a Wenckebach." For Mobitz II: "some Ps dont make it through." Practice recognizing these on real strips because this is a classic HESI question.'
        }
      },
      {
        q: 'You arrive to an unresponsive patient in VF. You deliver one shock. What is your very next action?',
        opts: [
          'Check pulse and rhythm',
          'Immediately resume chest compressions for 2 minutes',
          'Give epinephrine 1 mg IV',
          'Intubate and ventilate'
        ],
        ans: 1,
        exp: {
          correct: 'Current AHA guidelines: after every shock in cardiac arrest, resume compressions IMMEDIATELY for 2 minutes before any rhythm or pulse check. The heart is stunned post-shock and even if an organized rhythm is present it may not be perfusing. Compressions generate flow. Rhythm/pulse check happens at the end of the 2-minute cycle.',
          wrong: {
            0: 'Pulse and rhythm check immediately after a shock wastes the critical window where compressions are most effective. Old-school approach, wrong now.',
            2: 'Epinephrine is given DURING compressions, not instead of them. You do not pause compressions for drug administration.',
            3: 'Intubation can happen during compressions (with a supraglottic) or during a brief planned pause, but it is not the action that comes right after a shock.'
          },
          pearl: 'Modern ACLS rhythm: shock, compressions, 2 minutes, check, repeat. Drugs go in during compressions. Every pause in compressions costs you perfusion pressure that takes time to rebuild.'
        }
      },
      {
        q: 'A 58-year-old has sudden severe tearing chest pain radiating to his back. BP is 210/120 in the right arm, 170/90 in the left arm. What is the most likely diagnosis?',
        opts: [
          'Acute myocardial infarction',
          'Aortic dissection',
          'Pulmonary embolism',
          'Tension pneumothorax'
        ],
        ans: 1,
        exp: {
          correct: 'Tearing or ripping pain radiating to the back PLUS a BP differential greater than 20 mm Hg between arms is textbook aortic dissection. The tear separates aortic intima from media, and the false lumen can extend to block branch vessels (hence the pulse and BP differential). Surgical emergency: Type A (ascending) needs the OR immediately, Type B (descending) is often managed medically first.',
          wrong: {
            0: 'MI pain is classically pressure, crushing, or squeezing, not tearing. MI does not cause arm BP differentials.',
            2: 'PE is usually pleuritic chest pain with dyspnea, tachycardia, sometimes hemoptysis. Not tearing pain radiating to the back.',
            3: 'Tension pneumothorax has respiratory findings: absent breath sounds, tracheal deviation, JVD, severe distress, hypoxia. This is a cardiovascular presentation without respiratory compromise.'
          },
          pearl: 'NEVER give thrombolytics in suspected dissection. You will kill them. BP management is aggressive (beta-blocker first like esmolol or labetalol) to reduce shear stress on the aortic wall. Target SBP around 100 to 120.'
        }
      },
      {
        q: 'Post-ROSC, your patient has a SBP of 78, HR 118, SpO2 94% bagged. What is your next intervention?',
        opts: [
          'Begin norepinephrine drip immediately',
          'Give a 500 mL crystalloid bolus and reassess',
          'Intubate for airway protection',
          'Defibrillate in case of recurrent VF'
        ],
        ans: 1,
        exp: {
          correct: 'Post-ROSC hypotension is extremely common and reversible if addressed quickly. First line is a crystalloid bolus. Most post-arrest patients are volume depleted from pre-arrest state, prolonged resuscitation, and loss of vascular tone. Fluid first, pressor if fluid fails.',
          wrong: {
            0: 'Starting norepinephrine before trying fluid skips an easier intervention. The algorithm is fluid first, then pressor, unless the patient is clearly volume overloaded (pulmonary edema on exam).',
            2: 'If he is not already intubated, yes he likely needs it, but intubation is not addressing the current hypotension. Airway optimization happens in parallel, not instead of hemodynamic support.',
            3: 'He is not in VF right now. Empirically defibrillating a perfusing rhythm is harmful.'
          },
          pearl: 'Post-ROSC targets: MAP over 65, SpO2 92 to 98% (not 100%, hyperoxia is harmful), EtCO2 35 to 40, glucose in normal range, targeted temperature management if comatose after arrest.'
        }
      },
      {
        q: 'A 72-year-old has a BP of 220/118, a headache, and new-onset left-sided weakness. What is this and what is the priority?',
        opts: [
          'Hypertensive urgency, give oral antihypertensive',
          'Hypertensive emergency with stroke, rapid transport to stroke center',
          'Migraine with aura, give antiemetics',
          'Bell palsy, reassure and transport non-emergent'
        ],
        ans: 1,
        exp: {
          correct: 'End-organ damage (new neurologic deficit) plus high BP equals hypertensive emergency. In acute ischemic stroke, permissive hypertension is the rule. The brain is auto-regulating around the occluded vessel and aggressively dropping BP can worsen the infarct. Rapid transport to a stroke-capable facility, do not aggressively treat BP prehospital unless SBP is over 220 or DBP over 120.',
          wrong: {
            0: 'Oral medications are far too slow and miss the real diagnosis (stroke, not just high BP).',
            2: 'Migraine with aura is possible, but focal weakness at age 72 without a known migraine history is stroke until proven otherwise. Never assume migraine with new deficits in an older adult.',
            3: 'Bell palsy is peripheral CN VII dysfunction that affects the ENTIRE half of the face including the forehead. Stroke SPARES the forehead due to bilateral cortical innervation.'
          },
          pearl: 'Time is brain. Last known well time is the single most important history point. IV tPA window is typically 4.5 hrs from symptom onset; mechanical thrombectomy for large vessel occlusions can extend to 24 hrs.'
        }
      },
      {
        q: 'A 60 y/o male, sudden onset substernal chest pain 30 min ago, SOB, diaphoretic. EKG: ST elevation in II, III, aVF and ST depression in I, aVL. BP 88/58, HR 56, lungs clear. What lead should you check NEXT and why?',
        opts: [
          'V4R, to look for RV infarct',
          'V7-V9, to look for posterior MI',
          'V5-V6 again, to recheck lateral wall',
          'No more leads needed, just give nitro for the pain'
        ],
        ans: 0,
        exp: {
          correct: 'Inferior STEMI with hypotension and bradycardia screams RIGHT VENTRICULAR involvement. About 30 to 40% of inferior MIs have RV infarct. V4R confirms it: ST elevation 1 mm in V4R. RV is PRELOAD-DEPENDENT - so management changes dramatically. Fluids, NOT nitrates. Avoid morphine. Get the cath lab.',
          wrong: {
            1: 'Posterior MI is also worth checking (tall R waves in V1-V2, ST depression in V1-V3 reciprocal). But the hypotension + bradycardia in inferior MI specifically points to RV involvement, which is the dominant clinical concern here.',
            2: 'Lateral leads are not the issue. The story (hypotension + brady + inferior MI) demands RV evaluation, not more lateral.',
            3: 'Nitro in inferior MI with possible RV involvement can crash BP - drops preload, RV dependent on preload, BP tanks. Always check V4R in inferior MI BEFORE giving nitro.'
          },
          pearl: 'Inferior MI rule: HOLD the nitro until you rule out RV involvement. Get V4R routinely on every inferior STEMI. The hypotension is your tell. Treat with FLUID first, not vasodilators.'
        }
      },
      {
        q: 'A 35 y/o known WPW patient presents in afib with rapid ventricular response. HR 220, irregularly irregular, wide complex, BP 90/60, alert but symptomatic. What is the BEST initial management?',
        opts: [
          'Adenosine 6 mg IV push',
          'Diltiazem 0.25 mg/kg IV',
          'Procainamide 20 to 50 mg/min IV (max 17 mg/kg) OR synchronized cardioversion',
          'Digoxin 0.5 mg IV'
        ],
        ans: 2,
        exp: {
          correct: 'WPW with afib is a unique scenario. The accessory pathway can conduct very fast (rates over 250 possible) and can degenerate to VF. Procainamide blocks the ACCESSORY pathway and is the drug of choice. Cardioversion is also acceptable if unstable. Stick with procainamide or amiodarone (controversial in WPW), or cardiovert.',
          wrong: {
            0: 'ADENOSINE in WPW with afib can speed conduction down the accessory pathway and trigger VF. Absolutely contraindicated.',
            1: 'AV nodal blockers (CCBs, beta-blockers, digoxin, adenosine) all block the AV node, which preferentially channels conduction down the accessory pathway. Same mechanism, same risk - can degenerate to VF.',
            3: 'Same problem as diltiazem. Digoxin shortens accessory pathway refractoriness. Banned in WPW with afib.'
          },
          pearl: 'WPW + afib + AV nodal blocker = sudden cardiac death story. Memorize the contraindications: NO adenosine, NO calcium channel blockers, NO beta-blockers, NO digoxin. Procainamide or cardioversion. If you cant remember which way, just cardiovert.'
        }
      },
      {
        q: 'A 70 y/o with severe sudden ripping chest pain radiating to the back. BP 188/110 right arm, 142/88 left arm. HR 110. Faint left radial pulse. CXR shows widened mediastinum. Most likely diagnosis and ONE thing NOT to do?',
        opts: [
          'Aortic dissection. Do not give thrombolytics.',
          'STEMI. Do not delay aspirin and heparin.',
          'PE. Do not delay anticoagulation.',
          'Pneumonia. Do not delay antibiotics.'
        ],
        ans: 0,
        exp: {
          correct: 'Classic dissection: ripping pain to back, BP differential between arms (over 20 mmHg), pulse deficit, widened mediastinum on CXR. Treatment: tight BP control (target SBP 100-120), HR under 60, pain control. CRITICAL: do NOT give thrombolytics, anticoagulants in routine doses, or antiplatelets. Heparin and tPA in dissection cause catastrophic bleeding.',
          wrong: {
            1: 'STEMI is the dangerous misdiagnosis here - giving thrombolytics or full-dose heparin to a dissecting aorta is catastrophic. The BP differential, pulse deficit, and widened mediastinum should redirect.',
            2: 'PE doesnt cause BP differential or widened mediastinum. The story doesnt fit.',
            3: 'Pneumonia doesnt cause this presentation at all. Wrong differential entirely.'
          },
          pearl: 'Always check BPs in BOTH arms in any chest/back pain. A differential over 20 mmHg or a pulse deficit makes you go after dissection. Missing dissection and treating as MI with thrombolytics is one of the classic fatal misdiagnoses in emergency medicine.'
        }
      },
      {
        q: 'A 45 y/o female with known SLE on chronic prednisone presents with chest pain, dyspnea. JVD elevated, BP 84/62, muffled heart sounds. CXR: enlarged cardiac silhouette. EKG: low voltage with electrical alternans. What is your immediate management?',
        opts: [
          'Aggressive diuresis with IV furosemide',
          'Fluid bolus to maintain preload, prepare for pericardiocentesis',
          'BVM ventilation and CPAP',
          'Push beta-blocker for the tachycardia'
        ],
        ans: 1,
        exp: {
          correct: 'Cardiac tamponade. Becks triad (hypotension, JVD, muffled heart sounds) + electrical alternans + enlarged silhouette on CXR. SLE patients are at risk for pericarditis and pericardial effusions. Tamponade physiology: filling is impaired, so RAISING preload helps. Fluid bolus is a temporizer until you drain the pericardium. Pericardiocentesis is definitive.',
          wrong: {
            0: 'DIURESIS in tamponade is catastrophic. Lowers preload further, drops cardiac output, can cause arrest. Recognize what disease youre treating.',
            2: 'Positive pressure ventilation can WORSEN tamponade physiology by raising intrathoracic pressure and further reducing venous return. Useful adjuncts only after pericardium is drained.',
            3: 'The tachycardia is COMPENSATORY for the impaired filling. Beta-blocking it crashes the patient. Anything that lowers HR or contractility in tamponade is wrong.'
          },
          pearl: 'Tamponade physiology = give volume, drain the pericardium. The tachycardia is keeping them alive. Pulsus paradoxus over 10 mmHg supports the diagnosis at the bedside. Bedside echo is now standard for confirmation in EDs.'
        }
      },
      {
        q: 'A 55 y/o post-MI patient on metoprolol presents with witnessed syncope. HR 38, BP 78/50, alert but pale and diaphoretic. EKG: complete heart block, QRS narrow, escape rate 38. What is the BEST initial intervention?',
        opts: [
          'Atropine 0.5 mg IV',
          'Transcutaneous pacing while preparing for transvenous pacing or pacemaker',
          'Glucagon 5 mg IV for the metoprolol',
          'Push dose epi 10 mcg every 2 minutes'
        ],
        ans: 1,
        exp: {
          correct: 'Complete heart block is below the AV node - atropine WONT WORK because the block is not vagally mediated. Pacing is the answer. Transcutaneous as a bridge, then transvenous or permanent pacer. He is symptomatic (hypotensive, syncope) so pacing is needed urgently. Push dose epi is a reasonable bridge while pacer pads are placed.',
          wrong: {
            0: 'Atropine works on AV nodal block (Mobitz 1, 1st degree, sinus brady). Complete heart block typically has an infranodal block - atropine doesnt fix it and can even paradoxically worsen it.',
            2: 'Glucagon is reasonable IF this is purely a beta-blocker issue, but the EKG shows complete heart block which suggests a structural problem from the prior MI. Pacing addresses that directly. Glucagon is an adjunct.',
            3: 'Push dose epi can be used as a bridge but is not the definitive fix. Pacing is. Use epi while you set up the pacer.'
          },
          pearl: 'Atropine works for vagally mediated bradycardia (sinus brady, AV nodal block above the AV node). Below the AV node (Mobitz 2, complete heart block, infranodal disease), atropine fails. Pacing is the move. Memorize this distinction - atropine in complete heart block is one of the classic test errors.'
        }
      },
      {
        q: 'A 28 y/o cocaine user with sudden chest pain. EKG: ST elevation in V1-V4. BP 192/118, HR 122. What is the BEST initial drug therapy in addition to aspirin?',
        opts: [
          'Metoprolol IV',
          'Benzodiazepine (lorazepam or diazepam) plus nitroglycerin and consider phentolamine',
          'Adenosine',
          'Clopidogrel only, no other meds'
        ],
        ans: 1,
        exp: {
          correct: 'Cocaine MI. Treatment differs from typical MI in one big way: AVOID beta-blockers. Cocaine causes alpha-adrenergic stimulation and beta-blockers leave alpha unopposed, worsening vasoconstriction. Use BENZOS first (calm sympathetic surge), nitro for coronary vasodilation, phentolamine if BP is severe. Cath lab if STEMI persists. Aspirin yes, heparin yes.',
          wrong: {
            0: 'Beta-blocker in cocaine MI is the classic wrong answer. Unopposed alpha leads to worse vasoconstriction. Some new evidence challenges this dogma but for tests and general practice: dont give beta-blockers in fresh cocaine intoxication.',
            2: 'Adenosine is for SVT, not MI. Hes in sinus tach, not SVT.',
            3: 'Clopidogrel is fine but not the priority - the BP and sympathetic storm are what need to be managed. Aspirin is standard.'
          },
          pearl: 'Cocaine + chest pain rule: benzos first, nitro second, NO beta-blocker (alpha unopposed). Most cocaine chest pain is not MI but vasospasm or anxiety. STEMI from cocaine still goes to cath. The benzo also calms agitation, which calms the entire physiology.'
        }
      },
      {
        q: 'You arrive at a witnessed cardiac arrest. CPR in progress. Rhythm check at 2 min: VF. Shock at 200 J biphasic. CPR resumes. Next rhythm check: persistent VF. What is the NEXT step?',
        opts: [
          'Shock again (escalate to 300 J or per device)',
          'Push 1 mg epinephrine, then shock',
          'Intubate first before next shock',
          'Consider reversible causes only after 4 shocks'
        ],
        ans: 0,
        exp: {
          correct: 'Persistent VF at 4 minutes: shock again. Defibrillation is the highest-yield intervention in shockable rhythms. Time to shock is what saves lives. Compressions resume immediately after each shock. Epi comes in around the 4-minute mark (after second shock, before third). Reversible causes (Hs and Ts) are considered throughout, not delayed.',
          wrong: {
            1: 'Epi typically comes after the second shock. The current cycle is shock - CPR - rhythm check - shock - drug, repeat. Epi at 4 min, amio/lido at 6 min if persistent VF/pulseless VT.',
            2: 'Intubation is NOT a priority over defibrillation. BVM works fine in early arrest. Defibrillating is more important.',
            3: 'Hs and Ts are considered ALL THE TIME, not after a certain number of shocks. Look for hypovolemia, hypoxia, H+ (acidosis), hypo/hyperkalemia, hypothermia, tension pneumo, tamponade, toxins, thrombosis (PE/MI).'
          },
          pearl: 'Defibrillation is the most important intervention in shockable rhythms. Drugs are adjuncts. Time to first shock and CPR quality are the dominant survival variables. Intubation can wait; defibrillation cant.'
        }
      },
      {
        q: 'A 25 y/o athlete collapses on the field, witnessed VF. CPR starts immediately, AED applied at 1 min, shocked. ROSC achieved. He is now post-arrest, BP 96/58, HR 112, intubated. What is your post-ROSC priority for the next 30 min?',
        opts: [
          'Aggressive cooling to 33C',
          'Targeted temperature management at 36C, supportive care, identify and treat cause',
          'Push large fluid boluses to improve BP',
          'Rapid extubation since hes young'
        ],
        ans: 1,
        exp: {
          correct: 'Post-ROSC care: targeted temp management (32-36C - many systems use 36C now per TTM trials), maintain perfusion (MAP over 65), get the EKG and labs, consider cath if cardiac cause, and identify reversible causes. Avoid hyperventilation. Maintain SpO2 94-98% (avoid hyperoxia). Hypothermia for 24 hours improves neurologic outcomes.',
          wrong: {
            0: 'Aggressive cooling to 33C was the prior standard. The TTM trial showed 36C is non-inferior and many centers now use 36C as the target. Either is acceptable - just pick a temp and maintain it.',
            2: 'Excessive fluid in post-ROSC can worsen pulmonary edema and cerebral edema. His BP is acceptable. Vasopressors (norepi) would be the answer if BP needed support.',
            3: 'Post-arrest patients need a controlled, planned wake-up. Rapid extubation in someone who just arrested adds risk. Wait for neurologic recovery, hemodynamic stability, and oxygenation before weaning sedation.'
          },
          pearl: 'Post-ROSC: dont undo the work. Temperature management, gentle hemodynamics, normal pCO2, identify cause. Young athlete with VF arrest gets a workup for HCM, long QT, Brugada, ARVD, and similar inheritable conditions. Family screening is part of the disposition.'
        }
      },
      {
        q: 'A patient in cardiogenic shock from acute MI. BP 78/46, HR 112, lungs full of crackles, on 2 of vasopressors with marginal response. Cath shows critical LAD lesion. What mechanical support might be needed beyond the cath itself?',
        opts: [
          'IABP (intra-aortic balloon pump)',
          'Aggressive fluids',
          'Stop the vasopressors and let the body recover',
          'IV beta-blocker for the tachycardia'
        ],
        ans: 0,
        exp: {
          correct: 'Cardiogenic shock with marginal response to pressors despite cath: mechanical circulatory support is the next step. Options: IABP, Impella, ECMO. IABP reduces afterload and increases coronary perfusion. Newer devices (Impella) actively pump blood. The choice depends on local availability and patient anatomy. Door-to-balloon for the cath is still priority one.',
          wrong: {
            1: 'Crackles + cardiogenic shock = volume overloaded. Aggressive fluids worsen pulmonary edema. The pump is failing, not the volume status.',
            2: 'Stopping pressors in cardiogenic shock is malpractice. The body is not recovering - the heart is failing.',
            3: 'Beta-blocker in cardiogenic shock crashes contractility. The tachycardia is compensatory. Block it and the patient arrests.'
          },
          pearl: 'Cardiogenic shock not responding to pressors: think mechanical support. Door-to-balloon time is the dominant variable. Cath lab is the destination, not just a referral. IABP, Impella, ECMO each have indications - know what your shop does.'
        }
      },
      {
        q: 'A 50 y/o female with new onset palpitations and dyspnea, no chest pain. EKG: irregular irregular narrow complex tachycardia at 152, no clear P waves. BP 128/82, alert. Symptoms started 14 hours ago. Best management?',
        opts: [
          'Synchronized cardioversion at 100 J',
          'Rate control with IV diltiazem or beta-blocker, no need to cardiovert acutely',
          'Adenosine',
          'Push dig 0.5 mg IV'
        ],
        ans: 1,
        exp: {
          correct: 'New onset afib RVR, hemodynamically stable, symptom duration over 12 hours and unclear exact onset = clot risk if cardioverted without anticoagulation or TEE. Rate control with diltiazem (0.25 mg/kg) or metoprolol is correct. Anticoagulate based on CHA2DS2-VASc. Cardioversion only after 3 weeks of anticoagulation OR after TEE rules out atrial thrombus, OR if hemodynamically unstable.',
          wrong: {
            0: 'Cardioverting afib of unclear duration risks dislodging an atrial clot and causing stroke. The 48-hour rule: if onset is clearly under 48 hours, cardioversion is safer (still not zero risk). Beyond that, anticoagulate first.',
            2: 'Adenosine doesnt convert afib (multiple foci, not reentry). Useful only to slow rate transiently to see underlying rhythm.',
            3: 'Dig works slowly (hours), poor rate control during exercise/sympathetic states, narrow therapeutic window. Not first-line for acute rate control.'
          },
          pearl: 'Afib + over 48 hours = anticoagulate before cardiovert. Calcium channel blockers and beta-blockers are first-line for rate control. Cardioversion is for unstable patients OR after TEE/anticoagulation. The atrial clot risk is real and strokes from inappropriate cardioversion happen.'
        }
      },
      {
        q: 'A 45 y/o crushing substernal chest pain 90 min ago, EKG: ST elevation V2-V5, sweaty, nauseated. BP 142/88, HR 92. Aspirin given. Cath lab is 90 min away. What is the BEST disposition?',
        opts: [
          'Wait for cath, no other intervention',
          'Give thrombolytics (tenecteplase or alteplase) and continue transport to PCI center',
          'Just continue transport, no thrombolytics needed since cath is coming',
          'Cancel the cath, use thrombolytics only'
        ],
        ans: 1,
        exp: {
          correct: 'STEMI with door-to-balloon over 120 minutes: thrombolytics are indicated as bridge or primary therapy. Pharmaco-invasive strategy: lytics in the ambulance/local hospital, transfer to PCI center for cath in next 2 to 24 hours. Time-to-reperfusion is the primary determinant of muscle saved. The earlier the better.',
          wrong: {
            0: 'Waiting 90 min for the cath without any reperfusion costs muscle. Time = muscle. Bridge with lytics if cath wont happen within 90 to 120 min.',
            2: 'Same issue - delays reperfusion unnecessarily. Lytics + transfer for rescue PCI is the standard pharmaco-invasive approach.',
            3: 'PCI is still preferred even after lytics - early angiography (within 24 hours) is better than lytics alone. Pharmaco-invasive is lytics PLUS PCI, not lytics OR PCI.'
          },
          pearl: 'Door-to-balloon under 90 to 120 min = primary PCI. Longer = pharmaco-invasive (lytics now, PCI within 24 hours). The cutoff matters. Know your transport time before you commit to a strategy.'
        }
      },
      {
        q: 'A 78 y/o on warfarin presents with sudden weakness, near-syncope. HR 32, BP 80/50. EKG: 3rd degree AV block with junctional escape at 32. Glucose 96. Most likely cause and immediate intervention?',
        opts: [
          'MI with conduction system disease, transcutaneous pacing while activating cath',
          'Vasovagal episode, just observe',
          'Warfarin is causing the bradycardia, hold the warfarin',
          'Atropine 1 mg IV will fix this'
        ],
        ans: 0,
        exp: {
          correct: 'New 3rd degree AV block in elderly = think MI involving the conduction system (RCA territory or LAD with septal involvement). He is symptomatic and unstable - pace now, get the cath lab activated, treat as ACS. Atropine wont reliably work in infranodal block. Warfarin doesnt cause bradycardia. Get the EKG, troponin, and find the cause while you stabilize.',
          wrong: {
            1: 'Vasovagal doesnt cause complete heart block. The brady is structural, not autonomic.',
            2: 'Warfarin does not cause bradycardia. Different drug class.',
            3: 'Atropine in infranodal complete heart block is unreliable. Pacing is the answer.'
          },
          pearl: 'New AV block in older patient = look for MI. Cath lab while pacing as a bridge. Cardiology will sort out whether they need permanent pacer once the MI is addressed.'
        }
      },
      {
        q: 'A 60 y/o woman with HTN, on enalapril, presents with sudden tongue swelling, no rash, no respiratory distress yet. SpO2 97%. What is the most likely cause and best initial drug?',
        opts: [
          'Allergic reaction, give diphenhydramine and steroids',
          'ACE inhibitor angioedema, prepare airway, give epinephrine if airway is threatened',
          'Hereditary angioedema, give C1 esterase inhibitor (no need for epi)',
          'Anaphylaxis, push IV epi 1 mg'
        ],
        ans: 1,
        exp: {
          correct: 'ACE inhibitor angioedema - bradykinin-mediated, can occur anytime during therapy (years in). Distinct from allergic angioedema. Treatment: airway management is paramount. Epi can help if there is true airway threat or uncertainty about cause. Specific therapies (icatibant, C1 esterase inhibitor, FFP) are emerging but availability limited. Steroids/antihistamines do NOT work well for ACE inhibitor angioedema since its not histamine-mediated.',
          wrong: {
            0: 'Diphenhydramine and steroids are histamine pathway. ACE-inhibitor angioedema is bradykinin pathway. They wont reverse it. Used reflexively but ineffective.',
            2: 'Hereditary angioedema is family history, recurrent episodes, often abdominal pain, not provoked by ACE-I. Cause is C1 esterase inhibitor deficiency. Different management.',
            3: 'IV epi 1 mg is arrest dose - way too much for awake patient. IM epi 0.3-0.5 mg is the dose for severe airway involvement, NOT IV unless arresting.'
          },
          pearl: 'ACE inhibitor angioedema is BRADYKININ mediated, not histamine. Antihistamines and steroids dont reliably help. Airway is the priority. Once you stabilize airway, switch them off ACE-I forever - same drug class can recur.'
        }
      },
      {
        q: 'A 68 y/o with afib RVR, HR 168, BP 76/48, mottled skin, altered mental status. New onset 2 hours ago per family. Best immediate intervention?',
        opts: [
          'Diltiazem 0.25 mg/kg IV',
          'Synchronized cardioversion 120 to 200 J biphasic',
          'Adenosine 6 mg IV',
          'IV fluids and observe'
        ],
        ans: 1,
        exp: {
          correct: 'Unstable afib RVR (hypotension, mottling, altered mental status) = synchronized cardioversion immediately. Hemodynamic instability overrides clot risk concerns - cardiovert and address consequences after. Sedate if you have time and consciousness allows.',
          wrong: {
            0: 'Diltiazem in unstable afib drops BP further. He is already hypotensive.',
            2: 'Adenosine doesnt cardiovert afib. Useful for SVT but not multifocal atrial activity.',
            3: 'Fluids and observation in unstable afib RVR is wasted time. He is in shock from the rhythm.'
          },
          pearl: 'Stable afib RVR: rate control, anticoagulate, plan rhythm strategy. UNSTABLE afib RVR: cardiovert immediately. The signs of instability are hypotension, altered mental status, ischemic chest pain, signs of shock.'
        }
      }

    ]
  },
  {
    id: 'trauma',
    name: 'Trauma & Neurology',
    short: 'Trauma',
    desc: 'Stroke, shock, bleeding control, chest and abdominal and ortho trauma, multisystem.',
    color: '#f59e0b',
    colorVar: '--sec-trauma',
    icon: 'cross',
    flashcards: [
      { front: 'Common stroke mimics', back: 'Hypoglycemia, seizure with Todd paralysis, Bell palsy, migraine with aura, sepsis with encephalopathy, toxic ingestion, hypoxia.' },
      { front: 'Bell palsy vs stroke facial differentiation', back: 'Bell palsy affects the ENTIRE half of the face including the forehead. Stroke (central CN VII) SPARES the forehead due to bilateral cortical innervation.' },
      { front: 'Neurogenic shock findings', back: 'Hypotension PLUS bradycardia PLUS warm dry skin below injury. Loss of sympathetic tone from high cord injury (typically above T6).' },
      { front: 'Spinal shock vs neurogenic shock', back: 'Spinal shock: temporary loss of reflexes/motor/sensory below injury (neurologic, resolves over days to weeks). Neurogenic shock: hemodynamic (hypotension from loss of sympathetic tone).' },
      { front: 'Tension pneumothorax signs', back: 'JVD, tracheal deviation AWAY from affected side, absent breath sounds, hyperresonance, hypotension. Decompress: 2nd ICS midclavicular OR 5th ICS anterior axillary line.' },
      { front: 'Beck triad of cardiac tamponade', back: 'Hypotension, JVD, muffled heart sounds. Often pulsus paradoxus and narrow pulse pressure too.' },
      { front: 'Flail chest definition', back: 'Two or more adjacent ribs broken in two or more places, creating a free segment with paradoxical movement. Main threat is the underlying pulmonary contusion.' },
      { front: 'Cushing triad (increased ICP)', back: 'Hypertension (widening pulse pressure), bradycardia, irregular respirations (Cheyne-Stokes or similar). Late and ominous sign.' },
      { front: 'Hemorrhagic shock classes', back: 'I: under 15% loss, normal vitals. II: 15 to 30%, tachycardia. III: 30 to 40%, hypotension/altered. IV: over 40%, near arrest.' },
      { front: 'Pelvic fracture bleeding risk', back: 'Can lose 1 to 2 L into the pelvis. Apply a pelvic binder at the greater trochanters, permissive hypotension, rapid transport to a trauma center.' },
      { front: 'Cavitation in ballistic trauma', back: 'Temporary and permanent cavities. High-velocity rounds create a larger temporary cavity that damages tissue well beyond the bullet track. Matters most in elastic tissue like muscle, less in dense organs.' },
      { front: 'Blast injury phases', back: 'Primary: pressure wave (air-filled organs, lungs, ears, bowel). Secondary: fragments/projectiles. Tertiary: body thrown. Quaternary: burns, crush, inhalation.' },
      { front: 'Permissive hypotension - what and why', back: 'Target SBP around 80-90 in penetrating trauma without head injury until hemorrhage controlled. Aggressive fluid resuscitation pre-hemostasis dilutes clotting factors, raises BP enough to dislodge clots, and worsens outcomes. Goal is enough perfusion to keep brain working without overresuscitating. ALL changes in head injury where MAP needs to be higher.' },
      { front: 'Lethal triad of trauma', back: 'Hypothermia, acidosis, coagulopathy - they reinforce each other in a death spiral. Cold blood doesnt clot. Acidosis worsens coagulation. Both worsen as bleeding continues. Fix all three: warm the patient, blood products not crystalloid, address the acidosis source (perfusion). Damage control surgery (laparotomy, pack, close, ICU, return) was developed specifically for this.' },
      { front: 'Massive transfusion ratio', back: '1:1:1 ratio of plasma:platelets:RBCs (or as close as possible). Avoids dilutional coagulopathy. PROPPR trial: 1:1:1 vs 1:1:2 - 1:1:1 had lower hemorrhagic death. Activate massive transfusion protocol early in significant trauma. TXA 1 g IV within 3 hours of injury reduces mortality (CRASH-2).' },
      { front: 'Tranexamic acid in trauma - timing matters', back: 'TXA 1 g IV bolus within 3 HOURS of injury, then 1 g over 8 hours. CRASH-2 trial showed mortality benefit when given within 3 hours. After 3 hours, no benefit and may be harmful. Same for postpartum hemorrhage. Mechanism: blocks fibrinolysis (prevents existing clots from breaking down).' },
      { front: 'Beck triad and how often its complete', back: 'Hypotension, JVD, muffled heart sounds - cardiac tamponade. Becks triad is INCOMPLETE in most real cases. Trauma tamponade: penetrating trauma to the chest, especially the box (clavicles to costal margins, midclavicular bilaterally). FAST ultrasound is key. Pericardiocentesis as bridge to OR thoracotomy.' },
      { front: 'Indications for ED thoracotomy', back: 'Penetrating chest trauma with witnessed loss of pulses (signs of life within 15 min). Some include blunt trauma with witnessed arrest in OR/ED (less successful). NOT indicated for prolonged arrest, blunt trauma without signs of life, or no witnessed loss. Goals: relieve tamponade, cross-clamp aorta, internal cardiac massage, control bleeding.' },
      { front: 'Pelvic fracture - bleeding management', back: 'Major hemorrhage source from venous plexus and bone. Pelvic binder STAT (or sheet wrapped) at level of greater trochanters. Holds the pelvis in stable conformation, tamponades bleeding. NOT just at iliac crests (wrong level). Massive transfusion protocol. IR for embolization or surgery. Open-book pelvic fracture can hide 4 to 5 L of blood.' },
      { front: 'Trauma in pregnancy - critical considerations', back: 'After 20 weeks: left lateral tilt or manual uterine displacement to avoid IVC compression. Pregnant patients HIDE blood loss (30 to 50% expanded blood volume). RhoGAM if Rh-negative and any abdominal trauma. Best fetal resus = good maternal resus. Perimortem C-section by 4 minutes of arrest in viable pregnancy (24+ weeks) - benefits MOM by relieving IVC compression.' },
      { front: 'Compartment syndrome 5 Ps', back: 'Pain (out of proportion, worsens with passive stretch), Pallor (late), Paresthesia, Paralysis (late), Pulselessness (late, ominous). Wait for all 5 and you have lost the limb. Pain out of proportion is the EARLIEST and most reliable sign. Treatment: fasciotomy. Pressures over 30 mmHg or within 30 of DBP. Common after fractures, crush, restored perfusion after vascular surgery.' },
      { front: 'Crush syndrome management', back: 'Massive muscle injury releases K+, myoglobin, lactate. Risk: hyperkalemia and renal failure. Management: aggressive IV fluid BEFORE extrication, calcium for hyperkalemia, treat acidosis if present. Cardiac monitoring throughout extrication. Once entrapped tissue is freed, sudden K release can cause arrest. Pre-extrication fluid loading is the trick.' },
      { front: 'Shock index and what it tells you', back: 'HR / SBP. Normal under 0.7. Shock index over 1.0 = significantly elevated mortality risk. Useful in trauma where vital signs may look "ok" but trends suggest occult shock. SI of 1.4+ correlates with massive transfusion need. Better than HR or BP alone in early shock.' },
      { front: 'Spinal shock vs neurogenic shock', back: 'Different things. Spinal shock: temporary loss of all reflexes below cord injury (flaccid paralysis, areflexia) - resolves in days to weeks. Neurogenic shock: hemodynamic - loss of sympathetic tone below T6 injury, leads to bradycardia and hypotension. Treat with fluids carefully, vasopressors (norepi), atropine if bradycardia.' },
      { front: 'Cushings triad and what it means', back: 'HTN, bradycardia, irregular respirations - sign of increased intracranial pressure with brainstem compromise. Brain is herniating. Late and ominous. Hyperventilate to PaCO2 35 (transient bridge), elevate head 30 deg, hyperosmolar therapy (mannitol or hypertonic saline), neurosurgery emergency.' },
      { front: 'Glasgow Coma Scale - quick recall', back: 'Eye (4): spontaneous, to voice, to pain, none. Verbal (5): oriented, confused, words, sounds, none. Motor (6): obeys, localizes, withdraws, flexor (decorticate), extensor (decerebrate), none. Score 8 or less = intubate (cant protect airway). Score 13-15: minor head injury. 9-12: moderate. 8 or less: severe.' },
      { front: 'Head injury - target physiology', back: 'Avoid hypoxia (single biggest secondary insult), avoid hypotension (drops CPP), maintain MAP for CPP over 60 (CPP = MAP - ICP). Mild hyperventilation only as bridge to definitive treatment if signs of herniation - sustained hyperventilation worsens outcomes (vasoconstricts and reduces brain perfusion). Hyperosmolar therapy for elevated ICP.' },
      { front: 'Burn fluid resuscitation - Parkland formula', back: '4 mL x weight (kg) x %TBSA (2nd and 3rd degree only) for first 24 hours. Half in first 8 hours, rest over next 16. Use Lactated Ringers. Adjust for pediatrics (3 mL/kg/%TBSA, plus maintenance fluid). Titrate to urine output (0.5 mL/kg/hr adult, 1 mL/kg/hr peds). Parkland is a starting point, not gospel.' },
      { front: 'Stroke type differentiation matters because', back: 'Ischemic (87%) vs hemorrhagic (13%). Treatment is opposite. Ischemic: tPA up to 4.5 hours, thrombectomy up to 24 in select cases, BP allowed up to 220/120 unless treating with tPA. Hemorrhagic: BP target lower (140-160), reverse anticoagulants, neurosurgery for evacuation if appropriate. CT scan distinguishes them - get it FAST.' }
    ],
    scenarios: [
      {
        q: 'A 66-year-old presents with sudden right-sided weakness, slurred speech, and a BP of 190/100. Her daughter says she was normal 45 minutes ago. Her finger stick is 38 mg/dL. What do you do?',
        opts: [
          'Rapid transport to a stroke center, do not treat the glucose',
          'Administer D10 (or D50), reassess neurologic status, then decide on stroke center',
          'Give aspirin 324 mg and transport',
          'Administer nitroglycerin to lower the blood pressure'
        ],
        ans: 1,
        exp: {
          correct: 'Hypoglycemia is the number one stroke mimic and the cheapest, fastest thing to reverse. A BG of 38 easily produces focal deficits because hypoglycemia preferentially affects the brain regions with the highest metabolic demand. Give dextrose first. If the deficit clears with glucose, it was hypoglycemia. If it persists, treat as stroke with rapid transport and a documented last known well time.',
          wrong: {
            0: 'Never transport a hypoglycemic patient without correcting glucose. Hypoglycemia is reversible in minutes, while stroke protocols take far longer. Transporting her with a BG of 38 risks permanent neurologic injury from the glucose alone.',
            2: 'Aspirin 324 mg is contraindicated if the stroke is hemorrhagic (15% of strokes). You cannot rule that out without CT. Also, if this is hypoglycemia, you just gave an unnecessary medication.',
            3: 'Dropping BP in acute stroke can worsen the infarct by reducing perfusion to the at-risk penumbra. Her BP of 190/100 is mildly elevated but not at treatment thresholds for acute stroke.'
          },
          pearl: 'Check glucose on EVERY altered mental status, seizure, or neuro deficit. It takes 5 seconds and has reversed countless "strokes" and "seizures" in the field. Other common mimics: seizure with Todd paralysis, Bell palsy, migraine, sepsis, tox.'
        }
      },
      {
        q: 'A 24-year-old is hypotensive (BP 82/54) and bradycardic (HR 48) after a diving injury. Skin is warm and dry below the nipple line. What type of shock is this?',
        opts: [
          'Hemorrhagic shock',
          'Neurogenic shock',
          'Cardiogenic shock',
          'Anaphylactic shock'
        ],
        ans: 1,
        exp: {
          correct: 'Neurogenic shock is hypotension + bradycardia + warm/dry skin below the injury level. Loss of sympathetic tone from a high cord injury (typically above T6) causes vasodilation (hypotension) and unopposed vagal tone (bradycardia). The skin is warm and dry below the injury because there is no sympathetic vasoconstriction.',
          wrong: {
            0: 'Hemorrhagic shock has tachycardia (not bradycardia) as the sympathetic nervous system fights the blood loss, and cool/clammy/pale skin from sympathetic vasoconstriction.',
            2: 'Cardiogenic shock comes with pulmonary edema, crackles, JVD, usually chest pain or known MI. Not seen after a diving injury.',
            3: 'Anaphylaxis has hypotension with tachycardia, urticaria or angioedema, airway involvement with wheeze. Plus no allergen exposure here.'
          },
          pearl: 'Neurogenic shock: fluid challenge first, then pressors (norepi or dopamine). Watch for the bradycardia, may need atropine. Do not forget the C-spine injury is a surgical problem too; this is the hemodynamic manifestation of a likely cord transection.'
        }
      },
      {
        q: 'A 28-year-old male was stabbed in the left chest. He is hypotensive, JVD is present, breath sounds are equal bilaterally, heart sounds are muffled, HR 128. What is the most likely diagnosis?',
        opts: [
          'Tension pneumothorax',
          'Hemothorax',
          'Cardiac tamponade',
          'Flail chest'
        ],
        ans: 2,
        exp: {
          correct: 'Beck triad: hypotension + JVD + muffled heart sounds. Penetrating chest trauma plus these findings points directly at cardiac tamponade. Blood fills the pericardial sac and compresses the heart, preventing adequate filling. Breath sounds stay normal because the lungs themselves are not involved.',
          wrong: {
            0: 'Tension pneumothorax has absent or decreased breath sounds on the affected side, tracheal deviation, hyperresonance. His breath sounds are equal bilaterally, which makes tension pneumo unlikely.',
            1: 'Hemothorax has decreased breath sounds (blood filling the pleural space) and dullness to percussion. His breath sounds are equal.',
            3: 'Flail chest requires multiple rib fractures with paradoxical chest wall movement. A stab wound would not typically cause flail.'
          },
          pearl: 'Emergency pericardiocentesis or surgical thoracotomy is definitive. Field: fluids to maintain preload, rapid transport, CALL AHEAD so the receiving facility can prep. Every minute matters.'
        }
      },
      {
        q: 'A patient with severe head trauma now has a BP of 190/70, HR of 48, and irregular respirations. What does this represent?',
        opts: [
          'Neurogenic shock',
          'Cushing triad with rising ICP',
          'Hemorrhagic shock',
          'Spinal shock'
        ],
        ans: 1,
        exp: {
          correct: 'Cushing triad: hypertension (with widened pulse pressure), bradycardia, irregular respirations. The body is forcing systemic BP up to maintain cerebral perfusion against rising intracranial pressure. It is a LATE sign of impending herniation. Head up 30 degrees, maintain SBP over 110 (do not crash it low), mild hyperventilation to EtCO2 30 to 35 ONLY if active herniation signs, rapid transport.',
          wrong: {
            0: 'Neurogenic shock is hypotension + bradycardia (not hypertension). That is a cord-level problem.',
            2: 'Hemorrhagic shock is hypotension + tachycardia. This patient is hypertensive with bradycardia.',
            3: 'Spinal shock is a neurologic phenomenon (loss of reflexes and motor and sensory below injury), not this hemodynamic picture.'
          },
          pearl: 'Signs of herniation: unilateral blown pupil (uncal), decerebrate posturing, Cushing triad. These mean minutes, not hours. Targeted hyperventilation is a bridge, not a treatment. Definitive care is surgical decompression.'
        }
      },
      {
        q: 'A motorcycle rider was ejected. Pelvis is unstable on exam, BP 88/52, HR 132. Skin is pale and diaphoretic. Your priority intervention on scene?',
        opts: [
          'Full spinal immobilization then depart',
          'Apply a pelvic binder at the greater trochanters and begin rapid transport',
          'Start two large-bore IVs and push 2 L of crystalloid before moving',
          'Request air medical and wait on scene'
        ],
        ans: 1,
        exp: {
          correct: 'Unstable pelvis + hypotension + tachycardia = open-book pelvic fracture with massive hemorrhage. The pelvis can hold 1 to 2 liters of blood before tamponading. A binder at the GREATER TROCHANTERS (not iliac crests, which is the wrong anatomy and much less effective) closes the pelvic ring, reduces the volume, and helps tamponade bleeding. Then move.',
          wrong: {
            0: 'Spinal immobilization alone does not address the hemorrhage. He is bleeding out from the pelvis.',
            2: 'Dumping 2 L of crystalloid on scene delays transport, dilutes clotting factors, and raises BP enough to pop new clots (dilutional coagulopathy, "popping the clot"). Modern trauma care is permissive hypotension (SBP around 90), balanced resuscitation with blood products when possible.',
            3: 'Air medical is great, but waiting on scene costs time. Often better to start ground transport and rendezvous with air enroute if the distance justifies it.'
          },
          pearl: 'Binder position matters: greater trochanters (pubis level), NOT iliac crests. You are closing the pelvic ring like a book. TXA within 3 hours of injury reduces mortality in bleeding trauma. Push blood when available over crystalloid.'
        }
      },
      {
        q: 'You arrive to a patient with a GSW to the right chest. Breath sounds are absent on the right, trachea is deviated left, JVD is present, BP 80/50, SpO2 84%. What do you do first?',
        opts: [
          'Intubate the patient',
          'Needle decompression in the 2nd intercostal space midclavicular line on the right',
          'Seal the wound and transport',
          'Start a large-bore IV and push fluids'
        ],
        ans: 1,
        exp: {
          correct: 'Absent breath sounds on the affected side + tracheal deviation AWAY + JVD + hypotension + penetrating chest trauma = tension pneumothorax. Air is accumulating with no escape, compressing the lung, then the mediastinum, then the contralateral lung and vena cava. Decompress immediately: 2nd ICS midclavicular line or 5th ICS anterior axillary line (updated protocol prefers 5th ICS in adults due to chest wall thickness).',
          wrong: {
            0: 'Intubating first, then giving positive-pressure ventilation, will WORSEN the tension. Each PPV breath adds air to a space that cannot escape. Decompress first, then intubate if needed.',
            2: 'Sealing the wound without decompressing converts an open pneumo to a closed tension, making it worse. A vented chest seal (three-sided or one-way valve) is appropriate AFTER decompression.',
            3: 'Fluid does not fix the mechanical problem. He needs air out of his chest, not more volume in his veins.'
          },
          pearl: 'Needle decompression relieves tension temporarily. It is a bridge, not definitive care. Definitive is a chest tube. Reassess often, needles clot, kink, or the pneumo can re-tension. Have a second needle ready.'
        }
      },
      {
        q: 'A 22 y/o GSW to right chest, no exit wound. BP 84/52, HR 132, SpO2 91% on NRB, breath sounds diminished on right. Trachea midline. Two large-bore IVs. ETA to trauma center 12 min. What is your fluid strategy?',
        opts: [
          'Run 2 L NS wide open, target SBP 120',
          'Permissive hypotension: minimal crystalloid, target SBP around 80 to 90, blood if available',
          'Aggressive 30 mL/kg LR bolus per sepsis bundle',
          'No fluids, the patient is hypotensive but compensating'
        ],
        ans: 1,
        exp: {
          correct: 'Penetrating trauma without head injury: permissive hypotension is the strategy until hemorrhage is controlled. Aggressive fluids dilute clotting factors and pop clots, worsening bleeding. Target SBP around 80 to 90 (just enough to perfuse vital organs and feel a radial pulse). Get blood early. The PROMMTT and PROPPR data support balanced products over crystalloid.',
          wrong: {
            0: 'Pushing BP up to 120 with crystalloid in active hemorrhage causes "pop the clot" rebleeding. Old ATLS dogma. Modern trauma resuscitation is balanced products and lower target.',
            2: 'Sepsis bundle for trauma is wrong physiology. He is bleeding, not septic. Crystalloid floods are now associated with worse outcomes in trauma.',
            3: 'No fluids while he is in shock is also wrong. The answer is balanced and gentle, not absent.'
          },
          pearl: 'Permissive hypotension exception: HEAD injury. Patients with TBI need MAP higher (over 80 typically, with CPP over 60). For penetrating trauma without TBI, run lower BP and use blood products.'
        }
      },
      {
        q: 'A 35 y/o MVC. Multiple injuries, GCS 7, intubated. CT: small subdural hematoma, no shift. Pupils equal. BP 88/55. What is the priority for the brain in this patient?',
        opts: [
          'Hyperventilate to PaCO2 30 to maintain ICP',
          'Maintain MAP over 80 to keep CPP adequate, avoid hypoxia, head of bed at 30 degrees',
          'Aggressive cooling to 32C',
          'Withhold fluids to avoid cerebral edema'
        ],
        ans: 1,
        exp: {
          correct: 'CPP = MAP - ICP. So MAP must be high enough that even with elevated ICP, the brain perfuses. Target MAP over 80, CPP over 60. Avoid hypoxia (SpO2 over 94, normoventilate). Head up 30 degrees if no spine concern. Hyperosmolar therapy (3% saline or mannitol) if signs of herniation. Hypothermia and aggressive hyperventilation are not first-line based on current evidence.',
          wrong: {
            0: 'Sustained hyperventilation is OUT. Causes cerebral vasoconstriction and worsens ischemia. Brief hyperventilation only as bridge to surgery if signs of herniation are present.',
            2: 'Therapeutic hypothermia for TBI has not shown clear outcome benefits. Avoid hyperthermia (treat fever) but dont aggressively cool to 32C. Some evidence for 35-36C in elevated ICP.',
            3: 'Hypotension is one of the worst secondary insults in TBI. He needs FLUIDS or pressors to maintain MAP. Withholding fluids in a hypotensive head-injured patient is a fatal error.'
          },
          pearl: 'TBI mantra: avoid hypoxia, avoid hypotension. Both double mortality. Aggressive resuscitation in TBI is the OPPOSITE of permissive hypotension in penetrating trauma. Different physiology, different rules.'
        }
      },
      {
        q: 'A 60 y/o on warfarin (INR 3.2) trips and hits head on coffee table. No LOC. 4 hours later, family calls because hes "not himself." Confused, slurred speech, mild left hemiparesis. BP 168/92, HR 56, GCS 13. What is the priority?',
        opts: [
          'Stroke - activate stroke team for tPA',
          'Subdural hematoma from anticoagulated head trauma. Reverse warfarin emergently with 4-factor PCC + vitamin K, transport to neurosurgery center, no antiplatelet/antithrombotic',
          'Sundowning, observe',
          'Hypoglycemia - push D50'
        ],
        ans: 1,
        exp: {
          correct: 'Anticoagulated patient + head impact + delayed neurologic decline = ICH (often subdural with lucid interval) until proven otherwise. The mechanism (minor fall) gets discounted - thats the trap. HR 56 with HTN raises Cushing reflex concerns. Reverse warfarin with 4-factor PCC + vitamin K, get to neurosurgery, do NOT give tPA. Bradycardia + HTN + neuro changes on warfarin: ICH.',
          wrong: {
            0: 'Giving tPA to an anticoagulated patient with head trauma is fatal. Always image first. Stroke vs ICH is the critical CT distinction.',
            2: 'Sundowning never causes acute focal neurologic deficits. This is dangerous lazy thinking that has killed elderly patients sent home from EDs.',
            3: 'Glucose check is a quick safety net but doesnt explain focal hemiparesis. Check it but dont stop there.'
          },
          pearl: 'Head trauma + anticoagulation + ANY altered mental status, even days later = CT scan. Subdural hematomas can declare themselves hours to weeks after a minor fall in elderly anticoagulated patients. Reversing the anticoag is part of treatment, not optional.'
        }
      },
      {
        q: 'A 28 y/o motorcyclist with open femur fracture, exposed bone, severe bleeding. BP 92/60, HR 124. Tourniquet placed proximal to wound by bystander, bleeding controlled. ETA 8 min. Best management?',
        opts: [
          'Loosen the tourniquet to allow some perfusion',
          'Leave tourniquet in place, document time applied, transport, prepare massive transfusion',
          'Convert to direct pressure since bleeding has slowed',
          'Push 3 L crystalloid wide open'
        ],
        ans: 1,
        exp: {
          correct: 'Tourniquets save lives in extremity hemorrhage. Once applied and effective, leave them. Document time applied (limb tolerates ischemia for ~2 hours generally). Massive transfusion preparation since hes already shocky. TXA 1g IV within 3 hours of injury. Get to OR for definitive management.',
          wrong: {
            0: 'Loosening the tourniquet to allow perfusion is the old dogma. Modern recommendation: leave it, get to surgery. Loosening risks reactivating hemorrhage and worsening shock.',
            2: 'Converting an effective tourniquet back to direct pressure is unnecessary risk. If its working, it stays.',
            3: 'Aggressive crystalloid in active hemorrhage (especially without head injury) worsens outcomes. Use blood products, not 3 L of NS.'
          },
          pearl: 'Tourniquets work. Combat data confirmed it. The fear of "lose the limb" was overstated - hemorrhagic death is the bigger threat. Apply, document time, leave alone, transport. Surgical control is definitive.'
        }
      },
      {
        q: 'A 48 y/o ejected MVC, complaining of severe pelvic pain. BP 78/48, HR 138. Pelvis is unstable on exam (NEVER repeatedly compress). What is the IMMEDIATE step besides standard resuscitation?',
        opts: [
          'Apply pelvic binder at the level of greater trochanters',
          'Ace wrap the entire abdomen',
          'Manually compress and immobilize',
          'Tourniquet the lower extremities'
        ],
        ans: 0,
        exp: {
          correct: 'Suspected pelvic fracture with hemodynamic instability = pelvic binder ASAP. Place at the level of greater trochanters (NOT iliac crests - common error). Holds the pelvic ring stable, tamponades the venous plexus bleed. Open-book pelvic fracture can hide 4 to 5 L of blood. Activate massive transfusion. IR for embolization or OR for fixation.',
          wrong: {
            1: 'Ace wrap doesnt stabilize the pelvic ring. Wrong tool, wrong location.',
            2: 'Repeatedly compressing an unstable pelvis dislodges clots and causes more bleeding. Stop poking it. Bind it once and leave it.',
            3: 'Tourniqueting the lower extremities doesnt control pelvic bleeding. Wrong vasculature.'
          },
          pearl: 'Pelvic binder at GREATER TROCHANTERS. Iliac crests is a common error and doesnt provide the same stabilization. A folded sheet works in a pinch. Massive transfusion early. Bleeding from the pelvis can hide an immense volume.'
        }
      },
      {
        q: 'A 32-week pregnant woman in MVC. BP 100/60, HR 118, RR 24. Abdomen tender, fundus above umbilicus. Bright red vaginal bleeding. Best immediate intervention besides standard trauma care?',
        opts: [
          'Vaginal exam to find source of bleeding',
          'Manual left uterine displacement (or left lateral tilt) to relieve IVC compression',
          'Tocolytics to stop possible labor',
          'Withhold fluids until BP drops further'
        ],
        ans: 1,
        exp: {
          correct: 'Pregnancy after 20 weeks: gravid uterus compresses IVC in supine position, drops cardiac output 30%. Manual left uterine displacement OR left lateral tilt restores venous return. One of the highest-yield maternal interventions. Best fetal resuscitation is good maternal resuscitation.',
          wrong: {
            0: 'Never do a vaginal exam in pregnant trauma with bleeding until placenta previa is ruled out. Vaginal exam in previa causes catastrophic hemorrhage.',
            2: 'Tocolytics in trauma can mask maternal/fetal status and may worsen outcomes. OB makes this decision in-hospital.',
            3: 'Pregnant patients HIDE blood loss (expanded blood volume). HR 118 here is already a shock signal. Aggressive (gentle) resuscitation is needed.'
          },
          pearl: 'Pregnancy + trauma physiology cheat: increased blood volume hides hemorrhage, IVC compression hides cardiac output, RhoGAM if Rh-negative, perimortem C-section at 4 min of arrest for moms benefit. Treat mom first, baby benefits.'
        }
      },
      {
        q: 'A 19 y/o stab to the left chest, just left of sternum, fourth intercostal space. BP 78/50, HR 138, JVD elevated, breath sounds equal. SpO2 96%. What is the most likely cause of shock?',
        opts: [
          'Tension pneumothorax',
          'Cardiac tamponade',
          'Hemorrhagic shock from intra-abdominal bleeding',
          'Spinal cord injury'
        ],
        ans: 1,
        exp: {
          correct: 'Penetrating wound to the "cardiac box" (clavicles to costal margins, midclavicular bilaterally) + JVD + hypotension + EQUAL breath sounds = tamponade. Becks triad pattern. Penetrating injury to heart with rapid bleeding into pericardial sac. Pericardiocentesis as bridge, OR thoracotomy is definitive. FAST exam confirms.',
          wrong: {
            0: 'Tension pneumothorax: unequal breath sounds (absent on injured side). His are equal. JVD can be present in tension too, but the equal sounds + cardiac box wound point to tamponade.',
            2: 'Possible (penetrating injuries to chest can cross into abdomen) but the JVD points more toward tamponade. Hemorrhagic shock from intra-abdominal bleeding usually has flat neck veins.',
            3: 'Spinal injury without other findings doesnt fit. Penetrating chest wound + hemodynamic instability = check the heart.'
          },
          pearl: 'JVD + chest wound = think tamponade or tension pneumo. Listen for breath sounds (equal = tamponade, unequal = pneumo). Penetrating cardiac wound is a thoracotomy candidate if signs of life were present in the field. Get FAST early.'
        }
      },
      {
        q: 'A 40 y/o construction worker, 15 ft fall onto concrete. Found supine. Awake, complains of severe back pain, cant move legs, has urinary incontinence. BP 86/52, HR 58, lungs clear. Best initial management?',
        opts: [
          'Spinal precautions, IV fluids cautiously, prepare vasopressors (norepinephrine), atropine if bradycardia worsens',
          'Aggressive 2 L crystalloid bolus to bring BP up',
          'Lay flat, no fluids, treat with Trendelenburg',
          'Give methylprednisolone bolus per old NASCIS protocol'
        ],
        ans: 0,
        exp: {
          correct: 'Neurogenic shock from spinal cord injury. Loss of sympathetic tone below T6 = vasodilation + bradycardia. Treat with cautious fluids (avoid overload), pressors (norepi targets alpha for vasoconstriction), atropine for symptomatic bradycardia. Spinal precautions throughout. Imaging and neurosurgery consult.',
          wrong: {
            1: 'Aggressive bolus in neurogenic shock can cause pulmonary edema since the vascular compartment is dilated, not depleted. Cautious fluids, then pressors.',
            2: 'Trendelenburg has no proven benefit and can worsen ICP if there is any concurrent head injury.',
            3: 'High-dose methylprednisolone for spinal cord injury (NASCIS protocol) has been LARGELY ABANDONED. Modern guidelines do not recommend it - more harm than benefit in trials.'
          },
          pearl: 'Neurogenic shock: hypotension + BRADYCARDIA. (Distinct from hemorrhagic which is hypotension + tachycardia.) Treat with norepinephrine - phenylephrine doesnt fix the brady. Methylprednisolone for spinal cord injury is OUT, despite older protocols.'
        }
      },
      {
        q: 'A 60 y/o with smoke inhalation from house fire. Soot around mouth, hoarse voice, RR 24, SpO2 98% RA. He is alert, talking. What is your concern and action?',
        opts: [
          'Hes fine, transport non-emergent',
          'Inhalation injury with airway swelling pending - intubate EARLY before swelling closes the airway, even if he looks ok now',
          'Push antibiotics for pneumonia prophylaxis',
          'Ground level oxygen only, hold off on intubation since hes talking'
        ],
        ans: 1,
        exp: {
          correct: 'Inhalation injury markers (soot, hoarseness, singed nasal hairs, history of closed-space fire) predict progressive airway swelling over hours. Intubate while you still can SEE the anatomy. Once swollen, you may not be able to intubate, and crich becomes the only option. Also start 100% O2 (CO concern) - SpO2 lies in CO poisoning.',
          wrong: {
            0: 'Inhalation injury can deteriorate over hours. Sending him home or non-emergent transport without securing the airway can lead to a closed airway in the elevator.',
            2: 'Antibiotics for inhalation injury arent standard prophylaxis. Treat actual pneumonia if it develops.',
            3: 'Talking now does not predict talking in 6 hours. Inhalation injury is a tomorrow problem that you fix today.'
          },
          pearl: 'Inhalation injury rule: intubate early. Soot, singed hair, hoarseness, voice change, drooling, closed-space fire history. The swelling is hours away but unstoppable once it starts. Prophylactic intubation in this scenario saves airway emergencies later.'
        }
      },
      {
        q: 'A 25 y/o trapped under collapsed wall for 3 hours. About to be extracted. BP 110/72, HR 92, alert. Bilateral lower extremity injuries with significant muscle damage visible. What do you do BEFORE extrication?',
        opts: [
          'Just extricate, manage in the ambulance',
          'Pre-load with 2 L IV NS or LR before extrication, monitor cardiac for hyperkalemia, calcium chloride/gluconate ready',
          'Tourniquets on both legs before extrication',
          'Give morphine and extricate'
        ],
        ans: 1,
        exp: {
          correct: 'Crush syndrome physiology: muscle injury releases potassium, myoglobin, and acid into damaged tissue. When the entrapped tissue is freed, that toxic load floods the circulation - hyperkalemia can cause arrest in seconds. Pre-load with IV fluid before extrication, have calcium ready, monitor cardiac. After extraction, continue volume to flush kidneys.',
          wrong: {
            0: 'Extricating without prep risks immediate hyperkalemic arrest. The lethal potassium release happens at the moment compression is released.',
            2: 'Tourniquets PROXIMAL to crush areas as a temporizing measure can be considered in massive injury, but this is controversial. The standard answer is fluid pre-load first; tourniquets are a partial workaround.',
            3: 'Pain control alone misses the metabolic emergency. The patient may be alert and BP-stable now, but extraction without prep can kill in 30 seconds.'
          },
          pearl: 'Crush injury rule: dont pull until ready. Fluid pre-load, calcium ready, cardiac monitor on. The K+ release at extraction can produce sine-wave EKG and arrest before they finish lifting the wall off. Pre-emptive resuscitation is the play.'
        }
      },
      {
        q: 'A 70 y/o on apixaban (Eliquis) with atrial fib. Trip and fall on stairs. Strikes head. GCS 14, mildly confused, headache. BP 152/90. CT: small subdural hematoma, 4 mm, no shift. Best management?',
        opts: [
          'Discharge home with follow up since the bleed is small',
          'Reverse the apixaban with andexanet alfa (or 4-factor PCC if andexanet unavailable), admit, neurosurgery consult, no anticoagulation until cleared',
          'Resume apixaban tomorrow since the bleed is small',
          'Just observe, no need for reversal'
        ],
        ans: 1,
        exp: {
          correct: 'Even small intracranial bleeds in anticoagulated patients can expand. Reversal is indicated. Andexanet alfa is FDA-approved reversal for apixaban/rivaroxaban (factor Xa inhibitors). 4-factor PCC is alternative if andexanet unavailable. Hold anticoag until neurosurgery clears him - decision balances ongoing afib stroke risk vs ICH expansion risk. This is hospital-level care.',
          wrong: {
            0: 'Discharging with an active intracranial bleed in an anticoagulated elderly patient is a sentinel event. They expand. Admit, monitor, reverse.',
            2: 'Resuming apixaban next day is too soon for a fresh ICH. Decision on restart timing is patient-specific - days to weeks usually, with neurosurgery and primary team input.',
            3: 'Observation alone in an anticoagulated bleed lets it expand. Reversal is the standard of care.'
          },
          pearl: 'Anticoag reversals: warfarin = 4-factor PCC + vitamin K. DOAC factor Xa (apixaban/rivaroxaban) = andexanet alfa or 4-factor PCC. DOAC IIa (dabigatran) = idarucizumab. Know your reversal agents - this is one of the highest-stakes med decisions in anticoag bleeding.'
        }
      },
      {
        q: 'A 36 y/o female struck by car, found 30 ft from impact site. BP 76/48, HR 134, GCS 9. Distended rigid abdomen, pelvis stable. What is the BEST initial fluid resuscitation strategy?',
        opts: [
          '3 L crystalloid wide open, target SBP 120',
          'Balanced blood product transfusion (RBCs:plasma:platelets near 1:1:1), TXA 1g IV, target SBP around 90 since head injury possible',
          'Withhold fluids, just transport',
          'Albumin 5% 250 mL'
        ],
        ans: 1,
        exp: {
          correct: 'Polytrauma with TBI possibility. Want SBP higher than pure permissive hypotension to maintain CPP, but still avoid massive crystalloid (which causes coagulopathy and pop the clot). Balanced products from MTP. TXA within 3 hours. Target SBP around 90 to 100 (avoiding both hypotension and overresuscitation). Get to OR for the abdomen.',
          wrong: {
            0: 'Crystalloid wide open dilutes clotting factors, worsens coagulopathy, and bumps SBP enough to dislodge fresh clots. Use blood products preferentially.',
            2: 'Hes hypotensive and tachycardic - hes bleeding. Withholding all fluids while he loses pressure is wrong.',
            3: 'Albumin in trauma resuscitation is not standard and may worsen outcomes in TBI. Use blood products.'
          },
          pearl: 'Damage control resuscitation: blood, not crystalloid. 1:1:1 ratio. TXA in first 3 hours. Permissive hypotension calibrated to whether TBI is present (higher target with TBI). Get to definitive surgical control fast.'
        }
      },
      {
        q: 'A 24 y/o stab to left flank, 3 cm wound, no obvious evisceration. BP 110/70, HR 105, awake. Abdomen mildly tender at site. Best initial action besides routine assessment?',
        opts: [
          'Probe the wound to assess depth',
          'Apply occlusive dressing if any thoracoabdominal involvement, large-bore IV, transport to trauma center, do NOT explore the wound',
          'Discharge with antibiotics',
          'Place a Foley catheter to assess for blood'
        ],
        ans: 1,
        exp: {
          correct: 'Penetrating abdominal/flank trauma: do NOT probe or explore in the field. Big IV, blood ready, transport to trauma center. Imaging or laparotomy in hospital. Even with stable vitals now, hemorrhage can declare suddenly. Tetanus and antibiotics in the ED.',
          wrong: {
            0: 'Probing the wound can convert a closed bleeding source to an open one or push contamination deeper. Field exploration is contraindicated.',
            2: 'Stab wound to abdomen needs surgical evaluation, not discharge. Even hemodynamically stable patients can have intra-abdominal injuries that declare hours later.',
            3: 'Foley insertion to "check for blood" without indication is wrong. Do it if there are clinical reasons (suspected GU injury, hemodynamic instability) but not as routine for stab.'
          },
          pearl: 'Penetrating trauma rule: dont fight it in the field. Get to surgical care. Probing the wound is a classic wrong move that can cause harm. Trauma surgeons need an unaltered field for evaluation.'
        }
      },
      {
        q: 'A 5 y/o pulled from a house fire. Soot in mouth and nares. Awake but somnolent. SpO2 98% on room air, RR 22, HR 130. Mom reports he was unconscious briefly. What is your management focus?',
        opts: [
          'Treat for thermal burns only',
          '100% O2 via NRB regardless of SpO2 (CO unreliable on pulse ox), prepare for early intubation as airway swelling progresses, consider hydroxocobalamin for cyanide if appropriate',
          'Discharge home since hes awake',
          'Push naloxone'
        ],
        ans: 1,
        exp: {
          correct: 'Pediatric smoke inhalation triple threat: thermal injury (airway swelling pending), CO poisoning (SpO2 lies), cyanide (from burning plastics, cellular asphyxiation). Treatment: 100% O2 (drops CO half-life dramatically), early intubation if airway burn signs (soot, hoarseness, singed hair), hydroxocobalamin (Cyanokit) if cyanide suspected (high lactate, altered mental status, persistent acidosis).',
          wrong: {
            0: 'Thermal burns are obvious - the inhalation injury is the silent killer. SpO2 normal does NOT mean safe.',
            2: 'Discharge a child who was unconscious in a fire? No. Admit, monitor for delayed pulmonary effects, follow up.',
            3: 'Naloxone is for opioid overdose. No indication here.'
          },
          pearl: 'Smoke inhalation in peds: 100% O2 always, intubate early before airway closes, suspect CO and cyanide. Pulse ox lies in CO. Pediatric airways swell faster than adults - dont wait for stridor.'
        }
      }

    ]
  },
  {
    id: 'medical',
    name: 'Medical & Special Populations',
    short: 'Medical',
    desc: 'OB, endocrine, neurologic and abdominal emergencies, toxicology, psych, peds and geriatrics.',
    color: '#10b981',
    colorVar: '--sec-medical',
    icon: 'pill',
    flashcards: [
      { front: 'Ectopic pregnancy presentation', back: 'Unilateral lower abdominal/pelvic pain, vaginal bleeding (often minimal), positive pregnancy test, hypotension if ruptured. Kehr sign (referred shoulder pain) suggests intraperitoneal blood.' },
      { front: 'Abruptio placentae vs placenta previa', back: 'Abruption: PAINFUL, dark blood, rigid/tender uterus, fetal distress, can be concealed. Previa: PAINLESS bright red bleeding, soft uterus. NEVER do vaginal exam with suspected previa.' },
      { front: 'APGAR scoring', back: 'At 1 and 5 minutes. Appearance, Pulse, Grimace, Activity, Respirations. Each scored 0 to 2, total out of 10. Under 7 needs intervention, under 4 needs resuscitation.' },
      { front: 'Umbilical cord vessels', back: 'Two arteries (deoxygenated from fetus to placenta) and one vein (oxygenated from placenta to fetus). AVA.' },
      { front: 'DKA vs HHS', back: 'DKA: typically type 1, BG 300 to 600, ketones positive, acidosis, Kussmaul respirations, fruity breath. HHS: typically type 2, BG over 600, minimal ketones, profound dehydration, altered mental status, older patients.' },
      { front: 'Opioid toxidrome and dose', back: 'CNS depression, respiratory depression, pinpoint pupils, hypotension. Naloxone 0.4 to 2 mg IN/IM/IV, repeat q 2 to 3 min as needed. Titrate to respirations, not full reversal.' },
      { front: 'Sympathomimetic toxidrome (cocaine/meth)', back: 'Tachycardia, hypertension, hyperthermia, diaphoresis, mydriasis, agitation. Benzodiazepines for agitation and hemodynamics. Cool the patient. Do NOT use beta blockers alone (unopposed alpha).' },
      { front: 'TCA overdose signs and antidote', back: 'Wide QRS (over 100 ms), anticholinergic effects, hypotension, seizures, ventricular arrhythmias. Sodium bicarbonate for wide QRS and hypotension. Benzos for seizures.' },
      { front: 'Beta blocker and CCB toxicity treatment', back: 'Bradycardia and hypotension. Calcium (especially CCB), glucagon (BB), high-dose insulin euglycemia therapy, lipid emulsion, pressors.' },
      { front: 'Acetaminophen antidote', back: 'N-acetylcysteine (NAC). Toxicity plotted on Rumack-Matthew nomogram based on 4-hour level. Watch for delayed hepatic injury.' },
      { front: 'Aspirin (salicylate) toxicity', back: 'Tinnitus, tachypnea (mixed respiratory alkalosis AND metabolic acidosis), hyperthermia, altered mental status. Sodium bicarb to alkalinize urine, dialysis in severe cases.' },
      { front: 'Benzodiazepine toxicity', back: 'CNS depression, respiratory depression (less pronounced than opioids alone), ataxia. Flumazenil is antidote but rarely used prehospital, can precipitate seizures in chronic users.' },
      { front: 'Hepatitis transmission routes', back: 'A: fecal-oral. B: blood and body fluids, sexual. C: blood (needle-sticks, IVDU). D: only with B. E: fecal-oral. Vaccines for A and B.' },
      { front: 'Peds broselow-style weight estimate', back: 'Use length-based tape (Broselow) if available. Rough estimate: (age x 2) + 8 kg for ages 1 to 10.' },
      { front: 'Geriatric falls considerations', back: 'Look for underlying cause: syncope, stroke, dysrhythmia, infection, medication side effects. Check glucose, 12-lead, orthostatics. Occult injuries common (subdural, hip fracture). Low-energy mechanism can still be major trauma on anticoagulants.' },
      { front: 'Stroke window for tPA and thrombectomy', back: 'tPA: up to 4.5 hours from symptom onset (last known well). Thrombectomy: up to 24 hours in select large-vessel occlusions with favorable imaging (DAWN, DEFUSE 3 trials). Wake-up strokes: use last known well. Time matters - "time is brain" - 1.9 million neurons die per minute of large vessel occlusion.' },
      { front: 'Sepsis hour-1 bundle', back: 'Within first hour: measure lactate, blood cultures BEFORE antibiotics, broad-spectrum antibiotics, 30 mL/kg crystalloid for hypotension or lactate over 4, vasopressors if MAP under 65 after fluids. Surviving Sepsis Campaign data: every hour antibiotics delay = 4 to 8% increase in mortality. Norepinephrine first-line pressor.' },
      { front: 'Pediatric DKA differs from adult', back: 'CEREBRAL EDEMA risk in peds. Avoid: aggressive fluid bolusing, rapid sodium correction, bolus insulin, bicarbonate. Slower fluid (10 mL/kg over 1 hour, then 1.5x maintenance), insulin drip 0.05-0.1 unit/kg/hr (no bolus), correct over 24-48 hours. Watch for headache, AMS, bradycardia, HTN (cerebral edema signs). Treat with hyperosmolar therapy if it occurs.' },
      { front: 'Hyponatremia - correct slowly', back: 'Severe hyponatremia (under 120) with seizures or AMS: 3% saline 100 mL bolus, may repeat. Otherwise correct SLOWLY: max 8-10 mEq/L per 24 hours, 18 in 48 hrs. Faster = central pontine myelinolysis (osmotic demyelination), permanent neurologic damage. The cure can be worse than the disease.' },
      { front: 'Hypoglycemia treatment by route', back: 'Oral if alert/can swallow: glucose tab, juice, etc. (15g rule). IV: D10 100-250 mL or D50 25-50 mL (D10 is safer, less hyperglycemic overshoot). IM glucagon 1 mg if no IV access (works in 5-15 min, requires liver glycogen - wont work in chronic alcoholics or chronic starvation). Recheck glucose in 15 min, redose if needed.' },
      { front: 'Heat stroke vs heat exhaustion', back: 'Heat exhaustion: temp under 104, AMS absent, sweating present, treat with cooling and fluids. Heat stroke: temp over 104, AMS, may or may not be sweating (classic vs exertional). Treat: AGGRESSIVE rapid cooling - ice immersion best (cools 2x faster than evaporative). Goal: get under 102 within 30 min. Multi-organ failure if delayed. Cool first, transport second.' },
      { front: 'Hypothermia rewarming approach', back: 'Mild (32-35C): passive rewarming, blankets. Moderate (28-32): active external rewarming, warm IV fluids. Severe (under 28): active internal rewarming - warmed IV fluids, warmed humidified O2, peritoneal/pleural lavage, ECMO for arrest. NOT DEAD UNTIL WARM AND DEAD - prolonged CPR for hypothermic arrest, full recoveries documented from 13.7C core.' },
      { front: 'GI bleed - upper vs lower differentiation', back: 'Upper (above ligament of Treitz): hematemesis, melena (black tarry), more often hemodynamic compromise. Lower: hematochezia (bright red blood per rectum), often colonic source. ANY hematemesis = upper. Black stool = upper unless iron/bismuth. Resuscitate, NPO, PPI for likely peptic ulcer, octreotide if suspected variceal, EGD or colonoscopy.' },
      { front: 'SAH - subarachnoid hemorrhage clue', back: 'WORST HEADACHE OF LIFE, sudden onset (thunderclap), maximal at onset. May have neck stiffness, photophobia, brief LOC. CT picks up most within first 6 hrs. If CT negative and high suspicion, LP for xanthochromia. 50% mortality. Aneurysmal source typically. Time-critical for coiling/clipping.' },
      { front: 'Status epilepticus management', back: 'Seizure over 5 min OR repetitive seizures without recovery between. First line: benzo (lorazepam 4 mg IV, midazolam 10 mg IM if no IV). Second line: levetiracetam 60 mg/kg IV, fosphenytoin 20 PE/kg, or valproate 40 mg/kg. Third line: intubation + propofol/midazolam infusion. Find cause: glucose, electrolytes, infection, eclampsia, drug withdrawal, ICH.' },
      { front: 'Hyperkalemia treatment ladder', back: '1) Calcium FIRST (membrane stabilization, 1 g calcium gluconate IV, immediate). 2) Drive K into cells: insulin 10 units + D50 amp, beta-agonist (albuterol nebulizer 10-20 mg), bicarbonate if acidotic. 3) Remove K: dialysis (definitive), kayexalate (slow, questionable). Calcium does NOT remove K - it just buys time for the heart while you do the other steps.' },
      { front: 'Anaphylaxis - full management', back: 'IM EPI 0.3-0.5 mg lateral thigh (peds 0.01 mg/kg, max 0.3) - first line, only thing that saves lives. Repeat every 5-15 min if needed. Aggressive IV fluids (anaphylactic shock is distributive). H1 blocker (diphenhydramine), H2 blocker (famotidine), steroids (methylprednisolone) - all SECOND LINE. Refractory: epi infusion, glucagon if on beta-blocker. Observe 4-6 hrs for biphasic reaction.' },
      { front: 'TCA overdose - hallmarks and treatment', back: 'Wide QRS (over 100 ms), seizures, hypotension, anticholinergic features, AMS. Wide QRS is the danger sign - precedes VT/torsades. Treatment: SODIUM BICARBONATE (1-2 amps IV bolus, then drip). Mechanism: alkalinizes serum and provides Na to overcome sodium channel blockade. Repeat to keep QRS narrow and pH 7.5. Also for shock, hyperventilation if intubated.' },
      { front: 'Salicylate overdose recognition and treatment', back: 'Tinnitus, tachypnea (respiratory alkalosis early), anion gap metabolic acidosis (mixed), hyperthermia, AMS in severe. Treatment: alkalinize urine with bicarb (drives renal excretion), maintain pH 7.5 in serum and over 7.5 in urine. Hemodialysis for severe (level over 100, AMS, pulmonary edema). Critical: do NOT intubate without aggressive bicarb continuation - apnea on ventilator can cause sudden severe acidosis and death.' },
      { front: 'Beta-blocker overdose treatment', back: 'Bradycardia, hypotension, hypoglycemia (esp propranolol). Treatment: GLUCAGON 5 mg IV (bypasses beta receptor), high-dose insulin/euglycemia therapy (insulin 1 unit/kg bolus then drip with D10), calcium for hypotension, lipid emulsion as rescue (highly lipid-soluble drugs like propranolol). ECMO for refractory.' },
      { front: 'Calcium channel blocker overdose treatment', back: 'Bradycardia, hypotension, HYPERglycemia (calcium-mediated insulin release blocked - distinguishes from BB OD). Treatment: high-dose insulin/euglycemia therapy (mainstay), calcium, glucagon, lipid emulsion. Verapamil and diltiazem are the most lethal. Charcoal if early. Hemodialysis NOT effective (high protein binding).' },
      { front: 'Thyroid storm presentation and treatment', back: 'Severe hyperthyroidism: hyperthermia, tachycardia (often AF), AMS, GI symptoms, heart failure. Mortality 20-30%. Treatment: BETA-BLOCKER first (propranolol blocks both adrenergic and conversion T4 to T3), thionamide (PTU or methimazole), then IODINE 1 hour later (give thionamide first or iodine fuels more synthesis), steroids, supportive care. Find trigger (infection, surgery, MI, contrast).' },
      { front: 'Adrenal crisis management', back: 'Hypotension refractory to fluids/pressors in chronic steroid user, illness, surgery, or known adrenal insufficiency. Treatment: HYDROCORTISONE 100 mg IV STAT (or methylprednisolone 40 mg). Aggressive fluids, treat underlying cause. Always think of it in unexplained shock - chronic steroid users get steroid stress-dose during illness.' },
      { front: 'Refeeding syndrome basics', back: 'In severely malnourished/starved patient (eating disorder, alcoholism, post-bariatric, prolonged starvation): rapid carb intake = insulin surge = K, Mg, Phos drop into cells fast. Severe hypophosphatemia = cardiac/respiratory failure. Prevention: SLOW reintroduction of nutrition, replete electrolytes BEFORE starting feeds, monitor K, Mg, Phos closely.' }
    ],
    scenarios: [
      {
        q: 'A 27-year-old female has severe right lower quadrant pain, reports a missed period, and is lightheaded. BP 88/54, HR 124. She has minimal vaginal bleeding. What is your concern?',
        opts: ['Appendicitis', 'Ovarian cyst', 'Ruptured ectopic pregnancy', 'Urinary tract infection'],
        ans: 2,
        exp: {
          correct: 'Ruptured ectopic pregnancy until proven otherwise. Missed period + unilateral pelvic pain + hypotension + tachycardia is the classic triad. The fertilized egg implanted outside the uterus (usually the fallopian tube), grew, and ruptured through the tube causing intraperitoneal hemorrhage. She is bleeding into her abdomen. Large-bore IVs, fluids, rapid transport to surgical facility, notify receiving.',
          wrong: {
            0: 'Appendicitis: RLQ pain, McBurney point, fever, nausea, elevated WBC. Can mimic ectopic, but does not cause hemodynamic collapse unless perforated, and the missed period is a red flag for ectopic over appendicitis.',
            1: 'Ovarian cyst: can rupture and bleed, but usually much less hemorrhage than ectopic. The missed period still points to pregnancy-related cause.',
            3: 'UTI: dysuria, frequency, suprapubic tenderness. Not a cause of hemorrhagic shock.'
          },
          pearl: 'ANY female of reproductive age with abdominal pain and hypotension is a ruptured ectopic until proven otherwise. Kehr sign (referred shoulder pain) suggests intraperitoneal blood irritating the diaphragm. Type and crossmatch, OR for salpingectomy or salpingostomy.'
        }
      },
      {
        q: 'A 32-year-old, 34 weeks pregnant, has sudden painless bright red vaginal bleeding. She is hemodynamically stable. What is the most likely cause and what do you NOT do?',
        opts: [
          'Abruptio placentae, do not give oxygen',
          'Placenta previa, do NOT perform a vaginal exam',
          'Ectopic pregnancy, do not lay her flat',
          'Normal labor, do not transport'
        ],
        ans: 1,
        exp: {
          correct: 'Painless, bright red vaginal bleeding after 20 weeks gestation is placenta previa until proven otherwise. The placenta is implanted low, over or near the cervical os. A vaginal exam can dislodge clot, trigger massive hemorrhage, or disrupt the placenta further. Left lateral recumbent position (prevents vena cava compression), IV access, oxygen, transport to L&D, notify ahead.',
          wrong: {
            0: 'Abruption presents with PAIN (tearing or contractions), often DARK blood, can be concealed (all bleeding into the uterus with none external), rigid/tender uterus, fetal distress. Oxygen is absolutely indicated in abruption to help fetal oxygenation.',
            2: 'Ectopic is a first-trimester diagnosis, before the placenta even forms. She is 34 weeks, not consistent with ectopic.',
            3: 'Bright red bleeding is not normal labor. Labor is contractions with bloody show (mucousy), not frank bright red bleeding. Never dismiss third-trimester bleeding.'
          },
          pearl: 'Memory hook: painless bleeding = placenta previa. Painful bleeding = placental abruption. Both are obstetric emergencies but managed differently. Never do a digital vaginal exam on third-trimester bleeding until previa is ruled out by ultrasound.'
        }
      },
      {
        q: 'A 19-year-old type 1 diabetic is altered, breathing deeply and rapidly with a fruity breath odor. BG 462. What rhythm disturbance risk is most likely from the associated electrolyte imbalance?',
        opts: [
          'Hyperkalemia-induced peaked T waves and arrhythmia',
          'Hypokalemia-induced T wave flattening and U waves after fluid/insulin therapy',
          'Hyponatremia-induced seizures',
          'Both A and B at different stages'
        ],
        ans: 3,
        exp: {
          correct: 'DKA has a deceptive potassium picture. Initially, serum K is often HIGH because acidosis pulls K out of cells into the blood, but total body K is actually DEPLETED from osmotic diuresis. As you treat with fluids and insulin, K rushes back into cells and serum K can plummet dangerously low. You must monitor continuously: peaked T waves early (hyperK from acidosis), then T wave flattening with U waves (hypoK from treatment). Often supplement K when serum level drops under 5.0.',
          wrong: {
            0: 'Correct that hyperK is part of the picture, but missing the post-treatment drop risks lethal hypokalemia during care.',
            1: 'Correct that hypoK develops, but the initial phase often shows hyperK especially if severely acidotic.',
            2: 'Hyponatremia can occur in DKA (pseudohyponatremia from hyperglycemia), but K is the electrolyte that kills fast in DKA.'
          },
          pearl: 'DKA management: start with normal saline bolus. Insulin drip at 0.1 units/kg/hr. When BG drops to 250, switch to D5 1/2 NS to prevent cerebral edema (especially in peds). Replace K once under 5.0. Check K every 1 to 2 hours.'
        }
      },
      {
        q: 'A 24-year-old was found unresponsive with shallow breathing (RR 6), pinpoint pupils, and a BP of 98/62. What is your first intervention?',
        opts: [
          'Intubate with RSI',
          'Ventilate with BVM to improve oxygenation',
          'Administer naloxone 0.4 mg to 2 mg IN or IM',
          'Both B and C simultaneously'
        ],
        ans: 3,
        exp: {
          correct: 'The answer is BOTH. Opioid overdose kills through respiratory depression and hypoxia. Naloxone reverses the opioid effect, but he is hypoxic right now. Priority is oxygenation AND ventilation in parallel with reversal. Start bagging immediately while someone else prepares naloxone. Give naloxone IN or IM (fast onset, no IV needed). Titrate to respirations (about 12/min), NOT to full alertness, because full reversal triggers precipitated withdrawal and he will become combative and vomit.',
          wrong: {
            0: 'RSI is overkill and requires securing a line and drugs. BVM works instantly and reverses hypoxia now. Plus naloxone may avoid intubation altogether, which is better.',
            1: 'BVM alone keeps him alive but does not address the cause. He will keep needing ventilation until the opioid wears off. Naloxone fixes the problem.',
            2: 'Naloxone alone without ventilating first means 2 to 3 more minutes of continued hypoxia while it works. Bag him at the same time you prepare the naloxone.'
          },
          pearl: 'Naloxone 0.4 to 2 mg IN/IM/IV, repeat every 2 to 3 min. Short half-life (30 to 90 min). Long-acting opioids (methadone, fentanyl) may re-sedate after naloxone wears off, keep monitoring for hours. Fentanyl often requires higher initial doses.'
        }
      },
      {
        q: 'A 45-year-old is brought in after a cocaine binge. HR 148, BP 200/110, T 103 F, agitated and diaphoretic. What is the first-line treatment?',
        opts: [
          'Metoprolol 5 mg IV',
          'Diazepam or lorazepam IV, active cooling, fluids',
          'Labetalol 20 mg IV',
          'Nitroglycerin infusion'
        ],
        ans: 1,
        exp: {
          correct: 'Sympathomimetic toxidrome from cocaine: hyperthermia, HTN, tachycardia, agitation, diaphoresis. Benzodiazepines are FIRST LINE because they address every problem at once: agitation, heart rate, blood pressure, seizure prevention, and dissipation of CNS hyperstimulation. Add active cooling for hyperthermia, IV fluids, continuous monitoring.',
          wrong: {
            0: 'Metoprolol alone is the classic trap. Blocking beta receptors while cocaine is still stimulating alpha receptors causes UNOPPOSED ALPHA stimulation. Result: worse hypertension, coronary spasm, worsened ischemia. NEVER give a pure beta blocker alone in cocaine toxicity.',
            2: 'Labetalol has some alpha-blocking activity so it is safer than pure beta blockers, but benzos still come first. Use labetalol after benzos if needed.',
            3: 'Nitro treats HTN but not the agitation, hyperthermia, or underlying sympathetic storm. Benzos cover all of it.'
          },
          pearl: 'Cocaine chest pain: benzos, ASA, nitro, heparin if ACS indicators. AVOID beta blockers. If hyperthermic over 104 F, cool aggressively (ice packs, cold IV fluids, benzos to stop the shivering and agitation). Over 105 F causes rhabdomyolysis and death.'
        }
      },
      {
        q: 'A 2-year-old presents with fever, drooling, and a barking seal-like cough with inspiratory stridor that is worse with crying. No tripod posture. What is the likely diagnosis?',
        opts: [
          'Epiglottitis',
          'Croup (laryngotracheobronchitis)',
          'Foreign body aspiration',
          'Anaphylaxis'
        ],
        ans: 1,
        exp: {
          correct: 'Barking, seal-like cough with stridor worse with crying in a 2-year-old who does NOT look toxic is classic croup (laryngotracheobronchitis). Usually viral (parainfluenza). The child looks "sick but okay," unlike epiglottitis where they look truly toxic. Treatment: cool mist or humidified air, blow-by oxygen, nebulized racemic epinephrine for moderate-to-severe stridor at rest, dexamethasone.',
          wrong: {
            0: 'Epiglottitis: tripod position, drooling, toxic appearance, muffled voice, NO cough. The cough is the key differentiator. Croup has a classic barking cough. Epiglottitis does not.',
            2: 'Foreign body: sudden onset (often with a "he was playing with beads and then started choking" story), usually no fever, unilateral exam findings. Croup has gradual viral onset over days.',
            3: 'Anaphylaxis: rapid onset, urticaria, facial/lip swelling, wheezing, possible hypotension. No allergen exposure mentioned here.'
          },
          pearl: 'Croup severity: mild = barking cough only. Moderate = stridor at rest. Severe = agitation, cyanosis, retractions, altered mental status. Severe is a real airway emergency. Nebulized epi only lasts about 2 hours, watch for rebound.'
        }
      },
      {
        q: 'A 65 y/o with right-sided weakness and aphasia onset 90 min ago, last known well 90 min ago. CT shows no hemorrhage. BP 198/108, glucose 118, plt 220. NIH stroke scale 14. Best management?',
        opts: [
          'Treat BP aggressively to under 140/90 first',
          'Lower BP to under 185/110 (tPA threshold), then administer tPA, prepare for possible thrombectomy',
          'Aspirin 325 mg only, no tPA',
          'Heparin drip for stroke prevention'
        ],
        ans: 1,
        exp: {
          correct: 'Acute ischemic stroke within 4.5-hour window, no hemorrhage on CT, no contraindications. tPA candidacy requires BP under 185/110 - bring it down with labetalol or nicardipine drip to threshold, then give tPA. NIHSS 14 with possible large vessel occlusion - get CTA, prepare for thrombectomy if LVO. Time is brain.',
          wrong: {
            0: 'Lowering BP too aggressively in acute ischemic stroke can WORSEN ischemia by reducing collateral perfusion. Target is under 185/110 for tPA, otherwise allow up to 220/120 for spontaneous management.',
            2: 'Aspirin is fine but tPA-eligible patients should get tPA - aspirin alone misses the chance for reperfusion.',
            3: 'Heparin in acute ischemic stroke is not indicated for routine treatment. It increases hemorrhagic risk without clear benefit.'
          },
          pearl: 'Stroke time windows: tPA up to 4.5 hours, thrombectomy up to 24 hours in select cases with favorable imaging (DAWN/DEFUSE-3). Last known well is the start of the clock, NOT symptom discovery. Wake-up strokes use last known well (could be hours ago).'
        }
      },
      {
        q: 'A 72 y/o nursing home resident with fever 102.4F, confusion, RR 26, HR 118, BP 86/54. Lactate 4.2, WBC 18, urinalysis: large LE, positive nitrites, many bacteria. Best initial management?',
        opts: [
          'Wait for blood cultures before any antibiotics',
          'Hour-1 sepsis bundle: blood cultures THEN broad-spectrum antibiotics within 1 hour, 30 mL/kg crystalloid, lactate trending, vasopressors if BP doesnt respond',
          'Start narrow-spectrum antibiotic for UTI only',
          'Aggressive diuresis to lower the fever'
        ],
        ans: 1,
        exp: {
          correct: 'Septic shock from urinary source. Hour-1 bundle: lactate (got it), blood cultures (then antibiotics, dont delay over an hour for cultures), broad-spectrum antibiotics within 1 hour (urosepsis: ceftriaxone or pip-tazo), 30 mL/kg crystalloid for hypotension/lactate over 4, then norepinephrine if MAP under 65 after fluids. Every hour antibiotic delay increases mortality.',
          wrong: {
            0: 'Cultures first BUT antibiotics should not wait more than ~45 min. If cultures arent feasible quickly, give antibiotics. The mortality benefit of early antibiotics outweighs any culture yield concern.',
            2: 'Narrow-spectrum is fine eventually, but starting narrow in septic SHOCK risks missing resistant organisms. Cover broad first, narrow when sensitivities return.',
            3: 'Diuresis in septic shock dehydrates an already-volume-depleted patient. Wrong physiology entirely.'
          },
          pearl: 'Septic shock = vasodilatory + relative hypovolemia + organ dysfunction. Time to antibiotics is the SINGLE most powerful variable in survival. Norepinephrine first-line pressor (alpha + some beta, less dysrhythmia than dopamine). Vasopressin or epinephrine as second pressor.'
        }
      },
      {
        q: 'A 12 y/o T1DM with new altered mental status, glucose 580, ketones positive, K 5.8, pH 7.05, RR 32 deep, BP 96/60. What is the most important fluid strategy?',
        opts: [
          'Aggressive 20 mL/kg bolus immediately, repeat as needed',
          'Cautious 10 mL/kg over 1 hour, then 1.5x maintenance, NO insulin bolus, slow correction over 24-48 hours, watch for cerebral edema',
          'Insulin bolus 0.1 unit/kg first, then fluids',
          'Bicarbonate first to fix the acidosis'
        ],
        ans: 1,
        exp: {
          correct: 'Pediatric DKA. CEREBRAL EDEMA is the deadly complication, mortality 20-40% if it happens. Risk factors: aggressive fluid bolus, rapid correction, insulin bolus, bicarb. Slow fluids (10 mL/kg over 1 hour, then 1.5x maintenance), insulin DRIP only at 0.05-0.1 unit/kg/hr (no bolus), correct over 24-48 hours, watch closely for headache, AMS, bradycardia, HTN (cerebral edema signs).',
          wrong: {
            0: 'Aggressive bolus in peds DKA increases cerebral edema risk significantly. Adult DKA tolerates more aggressive fluids; peds is different.',
            2: 'Insulin BOLUS in peds DKA is contraindicated - drops glucose too fast, pulls water into cells, increases cerebral edema risk. Drip only.',
            3: 'Routine bicarb in DKA does not improve outcomes and may worsen them (paradoxical CSF acidosis, hypokalemia). Reserve for pH under 6.9 with hemodynamic compromise.'
          },
          pearl: 'Peds DKA cerebral edema signs: headache (early), AMS, bradycardia + HTN, posturing, pupil changes. Treatment if it happens: hyperosmolar therapy (mannitol or 3% saline), reduce IVF rate. Mortality from cerebral edema is high. Slow and steady wins.'
        }
      },
      {
        q: 'A 78 y/o female found unconscious. Glucose 32. After D10 250 mL IV, she awakens, eats. Next steps?',
        opts: [
          'Discharge home with food at bedside',
          'Identify cause (sulfonylurea, sepsis, medication error, alcoholism), monitor for recurrence (sulfonylurea half-life can cause recurrent hypoglycemia for 24+ hours), consider admission for at-risk patients',
          'Just retest glucose in 30 min',
          'Push glucagon for sustained effect'
        ],
        ans: 1,
        exp: {
          correct: 'Hypoglycemia is a symptom, not a diagnosis. Find the cause - sulfonylurea (glipizide, glyburide) overdose can cause recurrent hypoglycemia for 24+ hours due to long half-life. Octreotide may be needed. Alcohol-related hypoglycemia, sepsis, adrenal crisis, medication errors all in differential. Elderly with sulfonylurea hypoglycemia often need admission.',
          wrong: {
            0: 'Discharging an elderly patient with unexplained hypoglycemia is dangerous. The cause matters and recurrence risk is high.',
            2: 'Recheck is part of management but not enough. Identify cause and adjust treatment.',
            3: 'Glucagon requires liver glycogen - wont work in malnourished, alcoholic, or sustained starvation states. IV dextrose is preferred when access is available.'
          },
          pearl: 'Sulfonylurea hypoglycemia rule: bolus dextrose, start D10 drip, octreotide 50 mcg SQ blocks insulin release. Half-life of glipizide/glyburide can recurrence-trap patients for 12-24+ hours. Admit for monitoring.'
        }
      },
      {
        q: 'A 22 y/o collegiate football player at preseason practice, hot day. Found collapsed, temp 106F, AMS, HR 142, BP 86/50. Best initial intervention?',
        opts: [
          'IV fluids, transport, cool in the ambulance',
          'COOL FIRST in the field with ice immersion or cold-water dousing, IV fluids while cooling, transport when temp is dropping',
          'Acetaminophen 1 g for the fever',
          'Wait until ambulance arrives, dont disturb the patient'
        ],
        ans: 1,
        exp: {
          correct: 'Exertional heat stroke is a TIME-CRITICAL emergency. Mortality climbs with every minute over 104. Cold water immersion is the GOLD STANDARD - cools twice as fast as evaporative methods. Ice packs at neck, axillae, groin. Goal: under 102 within 30 min. Cool FIRST, transport SECOND. The only critical illness where you treat before transport.',
          wrong: {
            0: 'Standard transport-then-cool kills heat stroke patients. Each minute over 104F damages multiple organs. Aggressive field cooling is the standard for exertional heat stroke.',
            2: 'Antipyretics dont work for heat stroke - the hypothalamic set point isnt elevated, the body just cant dissipate heat. Tylenol/ibuprofen useless and may worsen hepatotoxicity.',
            3: 'Waiting wastes the most valuable resource. Heat stroke care is "cool now, ask questions later."'
          },
          pearl: 'Heat stroke rule: cool first, transport second. Cold water immersion is gold standard. Patient may shiver - thats fine, dont give benzos for it (worsens AMS picture). Stop active cooling at 102F to avoid overshoot. Multi-organ failure follows if cooling delayed.'
        }
      },
      {
        q: 'A 60 y/o ice fisher fell through ice, pulled out 20 min later. Core temp 28C, no palpable pulse, no respirations, EKG shows organized rhythm at 30. What is your management?',
        opts: [
          'Pronounce dead at the scene',
          'Active rewarming with warm IV fluids, warm humidified O2, blankets; CPR ONLY if no organized rhythm; transport to ECMO-capable facility, NOT DEAD UNTIL WARM AND DEAD',
          'Aggressive CPR with full ACLS dosing',
          'Cold IV fluids to maintain hypothermic protection'
        ],
        ans: 1,
        exp: {
          correct: 'Severe hypothermia with organized rhythm but unable to confirm pulse - hypothermic patients can have very slow rates with present perfusion. CPR if no organized rhythm; gentle handling otherwise (cold heart is irritable, can degenerate to VF with rough movement). Active rewarming: warm IV fluids, warm humidified O2, peritoneal/pleural lavage if available. ECMO is gold standard for hypothermic arrest. Documented full neurologic recoveries from 13.7C.',
          wrong: {
            0: 'Pronouncing dead a hypothermic patient with organized rhythm is malpractice. The mantra "not dead until warm and dead" exists because hypothermic patients can be saved.',
            2: 'CPR on a perfusing rhythm risks inducing VF in a cold, irritable heart. Confirm asystole/VF before chest compressions. ACLS doses metabolize poorly in hypothermia; some protocols hold drugs until warm.',
            3: 'Cold fluids worsen the hypothermia. Warm everything that goes in.'
          },
          pearl: 'Hypothermic arrest mantra: not dead until warm and dead. Continue CPR until core temp over 32C. ECMO if available. Drugs may not work until warm. Gentle handling - cold heart is irritable. Recoveries documented from temps that should have been impossible.'
        }
      },
      {
        q: 'A 55 y/o vomiting bright red blood and passing melena. BP 92/62, HR 122, pale, history of cirrhosis. Best initial management?',
        opts: [
          'Discharge with PPI prescription',
          'Two large-bore IVs, fluids, type and cross for blood, IV octreotide for likely variceal source, IV PPI, NG tube to estimate ongoing bleed, plan for endoscopy',
          'PO Pepcid and observe',
          'Heparin to prevent clot formation'
        ],
        ans: 1,
        exp: {
          correct: 'Upper GI bleed in cirrhotic = likely variceal until proven otherwise (60% of GI bleeds in cirrhotics are variceal). Octreotide reduces splanchnic flow. IV PPI for ulcer coverage. Aggressive resuscitation with blood products (NOT crystalloid alone). Antibiotics in cirrhotics with UGIB reduce mortality (ceftriaxone). Endoscopy within 12 hours.',
          wrong: {
            0: 'Hemodynamically unstable bleeding patient should not be discharged. Hospital admission for resuscitation and endoscopy.',
            2: 'PO meds in active vomiting wont work, and doesnt address volume status or variceal physiology.',
            3: 'Heparin in active hemorrhage is catastrophic - opposite of what the patient needs.'
          },
          pearl: 'Cirrhotic + UGIB = variceal until proven otherwise. Octreotide drip, ceftriaxone (reduces SBP and mortality), endoscopy within 12 hours. Balloon tamponade (Blakemore tube) as bridge in severe refractory bleeds. TIPS is rescue for refractory variceal bleeds.'
        }
      },
      {
        q: 'A 38 y/o sudden severe headache while at work, "worst headache of my life." Brief LOC. Now alert with neck stiffness, photophobia, BP 168/95. Best diagnostic step?',
        opts: [
          'Migraine treatment with metoclopramide and observe',
          'Non-contrast CT head emergently. If CT negative and high suspicion, lumbar puncture for xanthochromia. Neurosurgery consult.',
          'Discharge with neurology follow-up',
          'Treat empirically for meningitis'
        ],
        ans: 1,
        exp: {
          correct: 'Classic SAH presentation: thunderclap headache, brief LOC, neck stiffness. CT head non-contrast is first - sensitivity over 95% in first 6 hours, drops after. If CT negative and clinical picture screams SAH, LP for xanthochromia. Aneurysm in 80%, mortality 50%. Coiling/clipping by neurosurgery/neurointervention. BP control gentle (target 140-160 systolic, avoid extremes).',
          wrong: {
            0: 'Calling worst-headache-of-life a migraine without imaging misses SAH. Migraine has a known pattern; new explosive headaches need imaging.',
            2: 'Discharge with the worst headache of life is malpractice. Image first.',
            3: 'Meningitis is fever + headache + neck stiffness - the LOC and explosive onset point to SAH not meningitis. Both can have neck stiffness but the timeline differs.'
          },
          pearl: 'SAH red flags: thunderclap (max severity within seconds), worst-ever, exertional onset, with LOC, with seizure. CT in first 6 hours catches most. After 6 hours sensitivity drops, do LP for xanthochromia (yellow CSF from blood breakdown) or CTA. Time to diagnosis matters - rebleed kills more than the initial bleed.'
        }
      },
      {
        q: 'A 25 y/o seizing on arrival, no IV access yet, family says hes been seizing for 8 minutes. Best first move?',
        opts: [
          'Wait for IV access before treating',
          'Midazolam 10 mg IM in the lateral thigh, continue to establish IV',
          'Push IV phenytoin first',
          'Lorazepam 4 mg PO (place in cheek)'
        ],
        ans: 1,
        exp: {
          correct: 'Status epilepticus - seizure over 5 min OR repetitive without recovery. First-line BENZO. If no IV: midazolam 10 mg IM (RAMPART trial showed equal/better than IV lorazepam). If IV: lorazepam 4 mg. Repeat in 5 min if not stopped. Second line: levetiracetam 60 mg/kg IV, fosphenytoin, or valproate.',
          wrong: {
            0: 'Each minute of seizure causes brain injury. Dont wait for IV - go IM benzo, get IV during/after.',
            2: 'Phenytoin is second-line. Benzo first. Phenytoin is also slow to push and has cardiac effects.',
            3: 'Buccal/oral lorazepam in active seizure has unreliable absorption. IM midazolam is the move when no IV.'
          },
          pearl: 'Status epilepticus algorithm: benzo (IM if no IV), 2nd line at 10-20 min (Keppra/fosphenytoin/valproate), 3rd line at 30-60 min (anesthetic dose midazolam, propofol, or pentobarbital with intubation). Find the cause: glucose, electrolytes, ICH, infection, eclampsia, withdrawal, NCSE on EEG.'
        }
      },
      {
        q: 'A 62 y/o on hemodialysis, 2 days late for treatment. K 7.4, EKG: peaked T waves, PR prolongation, QRS widening to 130. BP 142/88. Treatment in order?',
        opts: [
          'Insulin/D50 first, then calcium',
          'Calcium FIRST (membrane stabilization), THEN drive K into cells (insulin/D50, beta-agonist, bicarb if acidotic), THEN remove K (dialysis is definitive)',
          'Kayexalate orally, then home',
          'Lasix 80 mg IV'
        ],
        ans: 1,
        exp: {
          correct: 'Hyperkalemia with EKG changes - urgent. Sequence: 1) CALCIUM (gluconate 1g or chloride 0.5g) - membrane stabilization, immediate effect, lasts 30-60 min. 2) Drive K into cells: insulin 10u with D50 amp, albuterol nebulizer 10-20 mg, bicarb if acidotic. 3) Remove K: hemodialysis (definitive in this patient), kayexalate slow and questionable. Calcium does NOT remove K - just buys time.',
          wrong: {
            0: 'Insulin/D50 drives K into cells but does NOTHING for membrane stability. The heart can fibrillate while you wait. Calcium FIRST is the mantra.',
            2: 'Kayexalate alone for symptomatic hyperkalemia with EKG changes is too slow. He needs calcium + intracellular shift + dialysis. Kayexalate efficacy is debated and onset is hours.',
            3: 'Lasix in dialysis-dependent patients without renal function does nothing. Wrong physiology.'
          },
          pearl: 'Hyperkalemia mantra: stabilize, shift, eliminate. Calcium FIRST. Even before you know the K is high - if EKG shows peaked T waves with the right context, push calcium while you confirm. Calcium chloride is more potent but harder on veins; calcium gluconate is safer.'
        }
      },
      {
        q: 'A 40 y/o known peanut allergic, ate peanut sauce. Now: lip swelling, throat tightness, generalized urticaria, BP 84/52, HR 134. He is on metoprolol for migraines. First-line treatment?',
        opts: [
          'IM EPINEPHRINE 0.3-0.5 mg lateral thigh, repeat every 5-15 min if no improvement, prepare for airway',
          'IV diphenhydramine 50 mg first, then IV methylprednisolone',
          'Albuterol nebulizer for the throat tightness',
          'IV epinephrine 1 mg push'
        ],
        ans: 0,
        exp: {
          correct: 'Anaphylaxis. IM epi is THE life-saving treatment. 0.3-0.5 mg in lateral thigh (best absorption). Repeat every 5-15 min if no response. Beta-blocker on board can blunt response - have GLUCAGON 1-5 mg IV ready as adjunct. Aggressive IV fluids (anaphylactic shock is distributive). Antihistamines and steroids are SECOND LINE - they dont save lives.',
          wrong: {
            1: 'Antihistamines and steroids are adjuncts. They dont reverse anaphylaxis, they help with longer-term control and itching. Patients die when these get prioritized over epi.',
            2: 'Albuterol helps with bronchospasm but doesnt address the systemic anaphylactic cascade. Adjunct only.',
            3: 'IV push epi 1 mg is arrest dose. In awake anaphylactic patient = MI, hypertensive crisis, dysrhythmias. IM is the route. IV infusion (not bolus) for refractory.'
          },
          pearl: 'Anaphylaxis on a beta-blocker: glucagon overcomes beta blockade. Same for refractory anaphylaxis even without beta-blocker. Biphasic reactions: 5-20% have second wave 4-8 hours later. Observe for at least 4-6 hours after resolution.'
        }
      },
      {
        q: 'A 30 y/o suicidal ingestion of "all my mom amitriptyline." Now lethargic, HR 128, BP 88/54, QRS 152 ms. Best initial treatment?',
        opts: [
          'Activated charcoal alone',
          'Sodium bicarbonate 1-2 amps IV bolus, repeat to keep QRS narrow and pH 7.45-7.55, fluids and pressors for hypotension, intubate if AMS worsens (with continued bicarb)',
          'Push IV lidocaine for the wide QRS',
          'Hemodialysis (TCAs are dialyzable)'
        ],
        ans: 1,
        exp: {
          correct: 'TCA overdose: wide QRS, AMS, hypotension. Wide QRS over 100 ms is the danger sign - precedes VT. Treatment: SODIUM BICARBONATE - alkalinizes (improves protein binding) and provides Na to overcome sodium channel blockade. Push 1-2 amps, repeat to keep QRS narrow and pH 7.45-7.55. If intubating, hyperventilate to maintain pH while you push more bicarb.',
          wrong: {
            0: 'Activated charcoal can be considered if early and patient awake/airway protected. But the urgent threat is the cardiac toxicity - bicarb FIRST.',
            2: 'Lidocaine in TCA OD has been used historically but bicarb is the answer. Class IA antiarrhythmics (procainamide) are CONTRAINDICATED - they worsen sodium channel blockade.',
            3: 'TCAs are NOT dialyzable - high protein binding and large volume of distribution. Bicarb is the antidote.'
          },
          pearl: 'TCA OD: QRS over 100 ms = bicarb. Refractory hypotension on bicarb: pressors + lipid emulsion. Avoid class IA, IC, III antiarrhythmics. Cardiotoxicity is what kills - watch QRS like a hawk and push bicarb until it narrows.'
        }
      },
      {
        q: 'A 50 y/o "took a bunch of aspirin" 4 hours ago. Tinnitus, RR 28, nausea. Salicylate level pending. Glucose 92, lactate 3.2, ABG: pH 7.42, pCO2 22, HCO3 14. Best management?',
        opts: [
          'Intubate immediately for protection',
          'Sodium bicarbonate drip (alkalinize urine to pH over 7.5), aggressive IV fluids, glucose, prepare for hemodialysis if level over 100 or AMS, AVOID intubation if possible (apnea worsens acidosis catastrophically)',
          'Activated charcoal only',
          'Discharge with antiemetics'
        ],
        ans: 1,
        exp: {
          correct: 'Salicylate OD with mixed acid-base (respiratory alkalosis early + metabolic acidosis = classic). Treatment: alkalinize urine with bicarb drip (drives renal excretion), aggressive fluids, glucose (CNS hypoglycemia masked by serum normoglycemia), hemodialysis for severe (level over 100, AMS, pulmonary edema, refractory acidosis). CRITICAL: DONT intubate if avoidable - their hyperventilation is keeping them alive. If you must intubate, hyperventilate them aggressively on the vent or they die from acidosis surge.',
          wrong: {
            0: 'Intubation in salicylate OD without aggressive ventilation = death. The patients respiratory alkalosis is compensating for metabolic acidosis. Apnea or normal-rate vent crashes pH catastrophically.',
            2: 'Charcoal is reasonable if early and airway protected, but the patient needs alkalinization too. Charcoal alone is insufficient.',
            3: 'Symptomatic salicylate OD (tinnitus, tachypnea) needs hospital management. Discharging is malpractice.'
          },
          pearl: 'Salicylate OD intubation rule: if you must intubate, set the vent rate HIGH to match pre-intubation minute ventilation, push bicarb continuously, and dialyze. Many patients die at the moment of intubation when their respiratory compensation is removed. When in doubt, dialyze first.'
        }
      },
      {
        q: 'A 65 y/o on chronic prednisone for COPD, now with sepsis, fluid-resuscitated, on norepinephrine 0.3 mcg/kg/min, MAP still 58. Best next step?',
        opts: [
          'Add second pressor (vasopressin or epinephrine)',
          'HYDROCORTISONE 100 mg IV STAT (adrenal crisis suspected in chronic steroid user with refractory shock), continue pressors, look for source',
          'Push more fluids (5L total now)',
          'Switch from norepinephrine to dopamine'
        ],
        ans: 1,
        exp: {
          correct: 'Refractory shock in a chronic steroid user = relative adrenal insufficiency / adrenal crisis. Hydrocortisone 100 mg IV stat (also useful in septic shock that is pressor-resistant per Surviving Sepsis). Stress-dose steroids in any chronic-steroid patient with significant illness. Look for source while resuscitating.',
          wrong: {
            0: 'Adding a second pressor is reasonable but if hes been on chronic steroids, hydrocortisone is what may actually save him. Often added simultaneously with second pressor.',
            2: 'More fluid in someone who is now 5L positive risks pulmonary edema. The problem isnt volume; its vascular tone and possible adrenal failure.',
            3: 'Dopamine has higher dysrhythmia rate than norepinephrine. Modern guidelines: norepi first, vasopressin second, epi third. Dopamine has fallen out of favor for shock.'
          },
          pearl: 'Chronic steroid use rule: any major illness or stress = stress-dose steroids. Adrenal crisis has subtle presentation but classic refractory hypotension. Hydrocortisone 100 mg IV is the reflexive move in chronic steroid users with shock.'
        }
      },
      {
        q: 'A 22 y/o with eating disorder admitted for severe malnutrition (BMI 12). Plan to start tube feeds. What is the dangerous syndrome to anticipate, and prevention?',
        opts: [
          'No specific risk, just feed normally',
          'Refeeding syndrome - check K, Mg, Phos before feeds, replete electrolytes first, START SLOW (under 50% calculated needs, advance over days), monitor electrolytes daily',
          'Aggressive feeding to restore weight quickly',
          'Only TPN, no enteral nutrition'
        ],
        ans: 1,
        exp: {
          correct: 'Refeeding syndrome: rapid carb intake = insulin surge = K, Mg, Phos shift into cells fast. Severe HYPOPHOSPHATEMIA = cardiac/respiratory failure, can be fatal. Prevention: check electrolytes BEFORE feeding, replete deficits, start at 25-50% of calculated needs, advance slowly over 5-7 days, monitor electrolytes (especially phos) daily. Any chronic malnutrition or starvation patient is at risk.',
          wrong: {
            0: 'Refeeding syndrome kills. Specific prevention is required.',
            2: 'Aggressive feeding in chronic malnutrition is the EXACT thing that causes refeeding syndrome. Slow is safer.',
            3: 'TPN in malnutrition has higher refeeding risk than slow enteral feeds. Enteral feeding preferred when possible.'
          },
          pearl: 'Refeeding syndrome at-risk: BMI under 16, weight loss over 15% in 3 months, alcoholism, prolonged starvation, cancer cachexia. Replete electrolytes BEFORE first calorie. Start LOW. Advance SLOW. Phosphorus daily monitoring. Adding thiamine before glucose prevents Wernicke.'
        }
      }

    ]
  },
  {
    id: 'ops',
    name: 'EMS Operations',
    short: 'Ops',
    desc: 'Scene leadership, medical legal, refusal of care, documentation, triage, vehicle operations.',
    color: '#a78bfa',
    colorVar: '--sec-ops',
    icon: 'shield',
    flashcards: [
      { front: 'Types of consent', back: 'Expressed (verbal or written). Implied (unconscious or minor in life threat, law assumes they would consent). Involuntary (court order, some psych holds). Informed consent requires disclosure of risks, benefits, alternatives.' },
      { front: 'Requirements for a valid refusal', back: 'Decisional capacity (oriented x4, understands situation and consequences), adult or emancipated minor, not impaired, signs refusal. Document mental status, BG, VS, risks explained, alternatives offered, who witnessed.' },
      { front: 'Four elements of negligence', back: 'Duty, Breach of duty, Causation (actual and proximate), Damages. All four must be proven.' },
      { front: 'HIPAA core principles', back: 'Protect PHI. Share only with treatment team, for billing, for required reporting, or with patient consent. Minimum necessary standard.' },
      { front: 'EMTALA purpose', back: 'Federal Emergency Medical Treatment and Active Labor Act. Any ED receiving Medicare must screen and stabilize before transfer, regardless of ability to pay. Prevents patient dumping.' },
      { front: 'Due regard definition', back: 'Operating an emergency vehicle with full awareness and reasonable caution despite lights and sirens privileges. Privileges do not exempt you from liability for negligent operation.' },
      { front: 'START triage categories and decision points', back: 'RPM after walking wounded step. Green: walking. Red: RR over 30 or under 10, OR no radial pulse or cap refill over 2 sec, OR cannot follow commands. Yellow: delayed, not red not green. Black: apneic after one airway attempt or dead.' },
      { front: 'Documentation error correction', back: 'Draw a SINGLE line through the error, initial, date, and write the correction. NEVER erase, white out, or alter after the fact. Late entries clearly labeled as addendum.' },
      { front: 'Mandatory reporting (most states)', back: 'Child abuse/neglect, elder abuse, domestic violence (varies), gunshot/stab wounds, dog bites, certain communicable diseases, suspected assaults. Specifics are state dependent.' },
      { front: 'Crime scene preservation priorities', back: 'Patient care first, always. Minimize disturbance: one in, one out path when possible. Note original position before moving. Do NOT cut through holes in clothing. Document what you moved and why.' },
      { front: 'Federal vs state EMS authority', back: 'Federal: NHTSA sets national scope guidelines, DOT regulates vehicles, EMTALA, HIPAA. State: licensure, specific scope of practice, medical direction rules. Local: protocols, medical director.' },
      { front: 'Incident Command System basics', back: 'Unified command on large scenes. Single incident commander if single agency. Sections: Operations, Planning, Logistics, Finance/Admin. Span of control 3 to 7 reports.' },
      { front: 'START triage categories - what they mean', back: 'Black (deceased/expectant): not breathing after airway repositioning. Red (immediate): breathing, RR over 30, OR no radial pulse OR cant follow simple commands. Yellow (delayed): breathing, RR under 30, has radial pulse, follows commands. Green (minor/walking wounded): can walk. 30 seconds per patient max. Quick and dirty - triage is repeated as patients evolve.' },
      { front: 'JumpSTART pediatric triage differences', back: 'For peds (1-8 yrs). Same colors but: if NOT breathing, give 5 RESCUE BREATHS first (kids arrest from respiratory failure, not cardiac like adults). If still no respirations -> black. If respirations resume -> red. RR over 45 or under 15 -> red. AVPU instead of follow commands. The rescue breaths attempt is the key difference.' },
      { front: 'SALT triage method', back: 'Sort, Assess, Lifesaving interventions, Treatment/Transport. Modern alternative to START. Includes lifesaving interventions in the triage process: control major hemorrhage, position airway, chest decompression, autoinjector antidotes. Categories: Immediate, Delayed, Minimal, Expectant, Dead. More flexible than START for chemical/biological events.' },
      { front: 'Incident Command System (ICS) basic structure', back: 'Five functional sections: Command (Incident Commander), Operations (tactical actions), Planning (strategy and tracking), Logistics (resources, supplies, communication infrastructure), Finance/Admin (cost tracking). Span of control 3-7 reports per supervisor. Unified command for multi-jurisdiction events. Required for federal funding under NIMS.' },
      { front: 'MCI definition and triggers', back: 'Mass casualty incident: any event where casualties exceed local resources. Definition is jurisdictional (small system: 3 patients; large system: 50). Trigger MCI plan EARLY - easier to scale down than scale up. First arriving unit usually establishes incident command, requests resources, gives scene size-up. Common pitfall: declaring MCI too late.' },
      { front: 'Hazmat zones - hot, warm, cold', back: 'Hot zone: contaminated area, only specially trained/PPE-equipped personnel. Warm zone: decon corridor, contaminated equipment, transition area. Cold zone: clean area where command, treatment, transport happen. Direction depends on wind - cold zone UPWIND of hazard. Patient enters from hot through warm (decon) to cold for treatment. Never treat in hot zone unless tactical.' },
      { front: 'Decontamination basics', back: 'Gross decon: remove clothing (eliminates 75-90% of contaminant), brush off particulates. Wet decon: water-based washing. Soap (mild surfactant) for many oily substances. Time matters - faster decon = less absorption. Direction: head to toe, dirty water flows away from clean areas. Symptomatic decon priority over visibly contaminated. Self-decon for capable patients reduces resource use.' },
      { front: 'CBRNE - acronym and basic recognition', back: 'Chemical, Biological, Radiological, Nuclear, Explosive. Chemical: rapid onset, point-source, multiple victims with similar symptoms. Biological: delayed onset (days), distributed pattern, may seem like outbreak. Radiological: depends on dose, may not be apparent immediately. Nuclear: blast + radiation + thermal. Explosive: blast injuries (primary, secondary, tertiary, quaternary).' },
      { front: 'Pediatric MCI considerations', back: 'Higher airway/respiratory susceptibility (smaller airways, faster RR). Hypothermia risk (large surface area to mass). Difficult vascular access. Need pediatric-specific equipment (BVM, ETT sizes, drug doses). Family separation trauma - keep families together when possible. Decon: warm water, warm environment to prevent hypothermia. JumpSTART triage instead of START.' },
      { front: 'Scene safety hierarchy', back: 'Self, partner, scene, patient, bystander - in that order. Cant help if youre dead or hurt. Common scene safety threats: traffic, electricity, chemical hazards, structural collapse, weapons, animals, family/crowd hostility. Stage out of unsafe scenes - law enforcement makes the scene safe before EMS enters violent scenes. Body armor is becoming standard in many systems.' },
      { front: 'Communications basics in EMS', back: 'Plain language, not 10-codes (NIMS standard - 10-codes vary by region and confuse multi-agency response). Clear, brief, professional. Repeat back critical information. Hand-off communication: standardized format (SBAR, MIST). Dispatch updates en route. Document times. CHANNEL DISCIPLINE - radio for what radio is for, phone for confidential or complex info.' },
      { front: 'Refusal of care - elements required', back: 'Patient must be ALERT, ORIENTED, capable of decision-making (not intoxicated, not actively suicidal, not altered). Must understand risks of refusal. Must understand alternatives. Free of coercion. Document EVERYTHING - the conversation, the warnings given, who was present, the patients exact words. Have patient sign release. Always offer "if you change your mind, call us back."' },
      { front: 'Capacity assessment vs competency', back: 'CAPACITY: clinical determination, situation-specific (a patient can have capacity to refuse a Band-Aid but not a major procedure). Required: understands info, appreciates how it applies to them, reasons through it, expresses choice. COMPETENCY: legal determination by court, applies broadly. Patients have RIGHTS even when their decisions seem unwise - dont confuse "I disagree" with "incapacitated."' },
      { front: 'DNR and POLST/MOLST validity', back: 'DNR: do-not-resuscitate order. Different forms by state. Must be the original or valid copy, signed by physician (or NP/PA in some states), patient or surrogate. Tattoos saying "DNR" are NOT legally binding - find documentation. POLST/MOLST: physician orders for life-sustaining treatment - more granular (intubation, hospitalization, antibiotics, feeding). Honor as written. Verbal DNR from family without documentation = full code.' },
      { front: 'Emergency vehicle operations basics', back: 'Lights and sirens are REQUEST for right of way, not entitlement. Most ambulance crashes happen at intersections - clear each lane individually. Speed appropriate to conditions. Seatbelts on patients and providers (when feasible). Spotter when backing. Lights/sirens for life-threatening only - elective transports without lights/sirens. Risk to crew exceeds benefit to patient in most non-emergent transports.' },
      { front: 'Restraints - when and how', back: 'Last resort. Indication: imminent danger to self or others, only after de-escalation fails. Preferred: chemical (haloperidol 5 mg + lorazepam 2 mg, OR ketamine 4-5 mg/kg IM). Physical restraints: 4-point, supine NOT prone (positional asphyxia from prone restraint has killed patients), monitor vitals continuously, document indication and observations. Excited delirium gets ketamine.' },
      { front: 'Domestic violence scene considerations', back: 'Scene safety first - perpetrator may still be present. Separate patient from suspected perpetrator for assessment when possible. Document objectively: direct quotes, observations of injuries, photos if local protocol. Mandatory reporting in most states (varies). Provide DV resources, NEVER coerce - they leave when they can. Children present = mandatory child protection report typically.' },
      { front: 'Crime scene preservation by EMS', back: 'Patient care first, but minimize disturbance. Cut around bullet/stab holes in clothing, dont through them. Save clothing in PAPER bags (not plastic - degrades evidence). Note what you moved. Avoid touching weapons. If patient deceased on arrival, dont disturb the scene unless absolutely necessary. Document times of pronouncement clearly. Coordinate with law enforcement on scene access.' }
    ],
    scenarios: [
      {
        q: 'An alert 40-year-old with chest pain refuses transport. Pain is 7/10. He is oriented x4, denies drugs/alcohol, and understands you have told him he could be having a heart attack and could die. What is the correct action?',
        opts: [
          'Transport against his will citing implied consent',
          'Call police to force the transport',
          'Document capacity, risks discussed, alternatives offered, witness to refusal, and obtain signed refusal',
          'Leave the scene immediately once he refuses'
        ],
        ans: 2,
        exp: {
          correct: 'He has capacity: oriented x4, not impaired, understands the risks. A competent adult has the right to refuse care, even when that decision could be fatal. Your job is to document it airtight: mental status assessment, full vital signs, specific risks you explained (MI, arrhythmia, sudden death), alternatives offered (follow up with primary, call back anytime symptoms worsen), witness present if possible, signed refusal form. Always offer to recheck before leaving.',
          wrong: {
            0: 'Implied consent applies to UNCONSCIOUS or IMPAIRED patients who cannot give expressed consent. A competent adult refusing care cannot be transported against their will. That is kidnapping and false imprisonment, and it gets providers sued and criminally charged.',
            1: 'Police cannot force medical transport of a competent refusing adult either. Exceptions exist only for specific legal holds: psych hold with imminent danger, court orders, clearly impaired state (intoxication, altered mental status).',
            3: 'Walking away without documentation is negligent and sets you up for a lawsuit if he dies. Complete the chart as thoroughly as if you had transported.'
          },
          pearl: 'Three-part capacity assessment: (1) understands the situation, (2) understands risks of refusal, (3) understands available alternatives. Document all three. Get the refusal signed by patient AND witness (family, partner, PD on scene). This protects everyone.'
        }
      },
      {
        q: 'You are driving Code 3 and strike a vehicle at an intersection after failing to slow and clear the intersection. Your patient dies from the delay. What legal concept exposes you to liability?',
        opts: [
          'Sovereign immunity covers you fully',
          'Failure to exercise due regard',
          'Good Samaritan protection applies',
          'EMTALA violation'
        ],
        ans: 1,
        exp: {
          correct: 'Due regard means operating with reasonable caution despite lights and sirens privileges. Running a red light WITHOUT slowing to clear the intersection is reckless. The privileges let you exceed speed limits, run red lights, go the wrong way on one-ways, but only with full awareness and reasonable care. Failing to clear an intersection, striking another vehicle, and causing harm exposes you to criminal negligence and civil liability.',
          wrong: {
            0: 'Sovereign immunity varies by state and typically does NOT cover reckless operation. Even where it exists, it carries major exceptions for gross negligence or willful misconduct.',
            2: 'Good Samaritan laws protect volunteer good-faith care by off-duty providers. They do not apply to on-duty EMS or emergency vehicle operation.',
            3: 'EMTALA is a hospital law about emergency screening and stabilization, unrelated to vehicle operation.'
          },
          pearl: 'Lights and sirens REQUEST right of way. They do not demand it. Drivers may not see or hear you, and distracted driving is everywhere now. ALWAYS slow for red lights and controlled intersections, make eye contact with other drivers, proceed only when clear. Emergency vehicle collisions are a leading cause of EMS provider death.'
        }
      },
      {
        q: 'You arrive at a multi-casualty incident with 20 patients. You see a patient walking around. In START triage, what category is she?',
        opts: [
          'Red (immediate)',
          'Yellow (delayed)',
          'Green (minor / walking wounded)',
          'Black (expectant)'
        ],
        ans: 2,
        exp: {
          correct: 'Anyone who can walk on command in START triage is GREEN (minor / walking wounded). Direct them to a designated green area. Then you focus on the non-ambulatory patients and assess RPM: Respirations, Perfusion, Mental status. Red = immediate life threats (RR over 30 or under 10, no radial pulse or cap refill over 2 sec, cannot follow commands). Yellow = delayed (not red, not green). Black = dead or expectant (no respirations after one airway attempt).',
          wrong: {
            0: 'Red is for immediate life-threatening injuries needing care NOW (airway, breathing, circulation problems).',
            1: 'Yellow is for patients who need care but can wait some time without deteriorating.',
            3: 'Black is for deceased or expectant patients (cannot be saved with available resources). A walking patient is clearly alive and not expectant.'
          },
          pearl: 'START is for first responders in MCI and field triage. JumpSTART is the peds variant (under 8 years). The goal in mass casualty is the greatest good for the greatest number. Sometimes that means walking past someone who would normally be your priority patient.'
        }
      },
      {
        q: 'You discover you charted a medication you did not actually give. You realize this 20 minutes after submitting the PCR. What do you do?',
        opts: [
          'Leave it, it is too late to change',
          'Go back into the original record and edit the entry',
          'Write an addendum clearly labeled, dated, timed, signed, explaining the correction',
          'Tell the partner to sign off on the original'
        ],
        ans: 2,
        exp: {
          correct: 'After a PCR is submitted, you NEVER alter the original record. You write an ADDENDUM clearly labeled as amendment/correction, dated, timed, signed, explaining what was wrong and why. This preserves the legal integrity of the original while correcting the record. Altering an original record looks like fraud, and it IS fraud when done with intent to mislead.',
          wrong: {
            0: 'Leaving wrong information in a medical record is negligent and potentially illegal. You have a duty to correct errors through proper channels.',
            1: 'Editing the original after submission is exactly what gets providers in trouble. Charting systems log every change, and any alteration after submission raises red flags and makes you look like you are hiding something.',
            3: 'Having someone else sign for you is forgery. Never do this, never let a partner do it either.'
          },
          pearl: 'Error noticed DURING documentation (pre-submission): single line through the error, initial, date, write the correction. Error noticed AFTER submission: addendum only, never alter. Keep copies of everything you write. Chart defensively because if it was not documented, it legally did not happen.'
        }
      },
      {
        q: 'You respond to a GSW at a residence. The scene is actively unsafe, shots can still be heard. What is your action?',
        opts: [
          'Enter immediately, the patient needs you',
          'Stage at a safe distance, notify dispatch and police, do not enter until scene is secure',
          'Enter with police for patient contact',
          'Refuse the call entirely'
        ],
        ans: 1,
        exp: {
          correct: 'Scene safety is always first. If the scene is active and dangerous, STAGE at a safe distance, coordinate with law enforcement, and wait for scene security. Entering an active scene turns you from responder into patient. You do no one any good by becoming another casualty that uses resources.',
          wrong: {
            0: 'Entering an unsafe scene is the wrong call, no matter how heroic it sounds. Dead providers cannot care for patients, and now we have multiple victims.',
            2: 'Entering WITH police on an actively unsafe scene where shots are still being fired is still entering an active scene. PD will tell you when the scene is secured.',
            3: 'Refusing the call is not the right framing. You are already there, you just STAGE until the scene is safe. Staging is not refusal. You are still responding, just not entering.'
          },
          pearl: 'Common unsafe scenes: active violence, hazmat, unstable structures, aggressive pets, unstable vehicles, downed live wires, confined spaces. When in doubt, stage and request appropriate resources (PD, hazmat, utility, heavy rescue). Your safety enables the mission.'
        }
      },
      {
        q: 'A 16-year-old female is the sole adult-appearing person at a minor single-vehicle crash. She has no parent present. She has a headache and slight neck stiffness but refuses transport. What is the correct approach?',
        opts: [
          'Accept her refusal, she is close to 18',
          'Transport her against her will as implied consent',
          'Attempt to contact a parent or legal guardian, evaluate for emancipated minor status, consult medical direction if unable to reach a parent and you have concerns',
          'Have her sign the refusal form and leave'
        ],
        ans: 2,
        exp: {
          correct: 'A minor cannot give informed refusal in most jurisdictions. You must attempt to contact a parent or legal guardian. If unreachable, evaluate for emancipated minor status (married, pregnant, armed forces, court-declared, living independently, varies by state). If you still cannot proceed and have concerning clinical findings (neck pain after MVC), contact medical direction for guidance. Document every attempt at contact.',
          wrong: {
            0: 'She is 16, not 18. She cannot legally refuse without a parent present unless formally emancipated. Do not shortcut this to save time, it is a liability bomb.',
            1: 'Implied consent is for unconscious or impaired patients. You cannot grab a conscious refusing minor and transport against their will without proper legal basis (court order, psych hold with danger).',
            3: 'Leaving without contacting parent or medical direction on a minor with concerning findings exposes you to serious liability if she deteriorates. A kid with neck pain after an MVC is not a no-patient contact refusal.'
          },
          pearl: 'Minor consent is state-specific. Most states allow minors to consent for STD treatment, substance use, mental health services, and contraception without parental involvement. For general medical refusal, parental or guardian involvement is almost always required. Know YOUR state rules, and document the hell out of everything.'
        }
      },
      {
        q: 'You arrive first at a 5-vehicle MVC on the highway. Visible casualties: 3 walking, 4 still in vehicles. What is your FIRST radio communication and action?',
        opts: [
          'Begin treating the most severely injured immediately',
          'Establish incident command, declare MCI, request additional resources, scene size-up to dispatch, then begin START triage',
          'Wait for the next ambulance to arrive',
          'Help walking wounded to the ambulance first'
        ],
        ans: 1,
        exp: {
          correct: 'First arriving unit at MCI: establish incident command (or transfer to senior arriving), declare MCI, request resources (medical helicopters, additional ambulances, fire, police, hazmat if needed), give scene size-up. THEN begin triage (START) - direct walking wounded to one area (green), tag others rapidly. Treatment comes AFTER triage in MCI doctrine.',
          wrong: {
            0: 'Treating individual patients before triage means others die. MCI doctrine: greatest good for greatest number. Triage is first, treatment second.',
            2: 'Waiting wastes critical minutes. The first unit establishes command and starts the process.',
            3: 'Walking wounded are GREEN (minor) - they go LAST for treatment, even though they may be loudest. Triage by severity, not by who is asking for help.'
          },
          pearl: 'MCI rule: triage before treatment. Walking wounded to GREEN area immediately (move them physically away from the scene). Treat REDS first. Resources come from Incident Command, not individual decisions. Communications discipline is what separates organized from chaotic MCIs.'
        }
      },
      {
        q: 'During START triage on an MCI, you find a patient who is breathing at 32/min, has no radial pulse, but follows commands. What is the triage category?',
        opts: [
          'GREEN (minor) - he is following commands',
          'RED (immediate) - RR over 30 OR no radial pulse meets RED criteria',
          'YELLOW (delayed) - he is conscious',
          'BLACK (deceased) - skip him'
        ],
        ans: 1,
        exp: {
          correct: 'START criteria for RED: RR over 30 OR no radial pulse OR cant follow simple commands. ANY of those three = red. He has TWO red criteria (RR 32 and no radial pulse). Following commands doesnt downgrade him - he meets RED on the other two checks.',
          wrong: {
            0: 'Following commands is the third criterion - if he met that AND had RR under 30 AND had radial pulse, he would be yellow or green. He fails two of three.',
            2: 'Yellow requires ALL THREE: RR under 30, radial pulse present, follows commands. He has only one of three.',
            3: 'Black is deceased or expectant. Hes breathing, hes following commands - hes alive and salvageable.'
          },
          pearl: 'START mnemonic: 30-2-Can-Do. RR under 30, cap refill under 2 sec (or radial pulse present), can do (follows commands). Failing any one = RED. Triage takes 30 seconds per patient max. Re-triage as conditions evolve.'
        }
      },
      {
        q: 'You arrive at a chemical plant with 12 workers reporting unknown exposure. Symptoms: tearing, drooling, miosis, vomiting, muscle twitching. What is the likely class and priority management?',
        opts: [
          'Carbon monoxide - 100% O2',
          'Organophosphate / nerve agent - DECON FIRST, then atropine and pralidoxime, supportive',
          'Cyanide - hydroxocobalamin',
          'Chlorine - just oxygen and supportive'
        ],
        ans: 1,
        exp: {
          correct: 'SLUDGE/DUMBELS toxidrome (salivation, lacrimation, urination, defecation, GI distress, emesis / defecation, urination, miosis, bronchospasm, emesis, lacrimation, salivation) = cholinergic excess from organophosphate or nerve agent. Treatment: STOP THE EXPOSURE FIRST - decon. Then atropine (LARGE doses, titrate to dry secretions, may need many mg), pralidoxime (2-PAM) reactivates acetylcholinesterase. Benzos for seizures. Supportive (atropine doesnt fix everything, but it dries them out enough to ventilate).',
          wrong: {
            0: 'CO doesnt cause cholinergic toxidrome. Tearing, drooling, miosis are not CO.',
            2: 'Cyanide causes cellular asphyxiation - altered mental status, lactic acidosis, "almond breath." Different toxidrome.',
            3: 'Chlorine causes upper airway irritation and pulmonary edema, not cholinergic toxidrome.'
          },
          pearl: 'Mass casualty cholinergic exposure = nerve agent or organophosphate. Atropine doses are HUGE (start 2-6 mg, double every 5 min until dry). Auto-injectors (DuoDote: atropine + 2-PAM) for first responders self/peer-care in nerve agent attack. Decon first - you can be exposed via patient contact.'
        }
      },
      {
        q: 'You are operating in the WARM zone of a hazmat incident. A patient is brought to you in obvious respiratory distress. What is your action?',
        opts: [
          'Begin treatment in the warm zone, then complete decon after stabilization',
          'Cant treat until decon is complete and patient is in cold zone',
          'Begin LIFE-SAVING interventions only (airway positioning, hemorrhage control), continue decon, then full treatment in cold zone',
          'Send patient back to hot zone for re-exposure assessment'
        ],
        ans: 2,
        exp: {
          correct: 'Warm zone allows decon AND minimal life-saving interventions (LSI) per modern doctrine (especially SALT triage approach). LSI: open airway, control major hemorrhage, needle decompression for tension pneumo, autoinjector antidotes for known agents. Full ALS treatment happens in COLD zone after decon. The principle: dead patients dont need decon, but suboptimally-decontaminated rescuers contaminate everyone downstream.',
          wrong: {
            0: 'Full treatment in warm zone risks contaminating providers and equipment. LSI only is the doctrine.',
            1: 'Strict "no treatment until cold zone" is outdated. Modern doctrine allows LSI in warm zone for life threats.',
            3: 'Sending patients back to hot zone is wrong. Move TOWARD cold zone, not away.'
          },
          pearl: 'Hazmat zones: HOT (contaminated, special PPE only), WARM (decon corridor, LSI permitted), COLD (clean, full treatment). Direction is upwind. Lives saved by simple LSI in warm zone (open airway, stop hemorrhage) - dont be too rigid about "no treatment."'
        }
      },
      {
        q: 'A 16 y/o with a head laceration after MVC. He is alert, oriented, not intoxicated, refusing care. Vitals stable. What do you do?',
        opts: [
          'Force him onto the stretcher and transport - hes a minor',
          'Capacity assessment: minors generally cannot refuse care without parental authority. Contact parents/guardian, document, may need law enforcement assistance. Some emancipated minors can refuse, varies by state.',
          'Discharge him at the scene, document refusal',
          'Sedate him to transport'
        ],
        ans: 1,
        exp: {
          correct: 'Minors cannot generally consent or refuse for themselves - parental/guardian authority is required, with exceptions (emancipated minors, certain reproductive/STI care, etc., varies by state). For a clinically significant mechanism (MVC, head laceration), need parental contact. If life-threatening, treat under implied consent. Document everything.',
          wrong: {
            0: 'Forcing care without legal authority is battery. The proper path is consult guardian, document, possibly involve law enforcement.',
            2: 'Discharging a minor at scene with a head injury after MVC is exposing yourself and your service to liability. Document, contact guardian, escalate.',
            3: 'Sedation without consent is forcible chemical restraint - very high legal threshold (imminent danger to self/others, not just refusal of care).'
          },
          pearl: 'Refusal hierarchy: capacity (alert, oriented, not intoxicated, not actively dangerous), informed (knows risks), voluntary (no coercion). Minors have a different framework - parental/guardian authority. Document conversations, witnesses, exact wording. Refusal is the highest litigation-risk EMS encounter.'
        }
      },
      {
        q: 'You arrive to find a 70 y/o male in cardiac arrest, CPR in progress by family. They show you a tattoo on his chest reading "DNR." No paperwork available. What do you do?',
        opts: [
          'Honor the tattoo, stop resuscitation',
          'Tattoos are NOT legally binding DNR documentation. Continue resuscitation while attempting to verify with family/medical control. If DNR cannot be verified, full code.',
          'Call medical control and ask',
          'Stop resuscitation if any family member confirms verbally'
        ],
        ans: 1,
        exp: {
          correct: 'DNR tattoos are NOT legally binding documentation in most jurisdictions. Continue resuscitation while you try to find paperwork (POLST/MOLST/DNR forms), contact family for documents, call medical control. If verifiable DNR cannot be obtained, full code is the default. Family verbal request without documentation does not override default to resuscitate.',
          wrong: {
            0: 'A famous JAMA case showed how complicated this is - a tattoo turned out to reflect old wishes that the patient had since reversed. Without documentation, you cant know.',
            2: 'Calling medical control is correct procedure but does not override the lack of documentation. Default is full code while sorting it out.',
            3: 'Family verbal claims of DNR without documentation are insufficient. Family disagree, family change their minds, family lie - rare but real. Get the paper.'
          },
          pearl: 'DNR rule: paperwork or its presumed full code. Tattoos, family stories, neighbors, medic alerts can be supportive but typically not the sole basis. POLST/MOLST is the most useful EMS document because its physician-signed and granular (intubate? compressions? hospitalize?). Document everything.'
        }
      },
      {
        q: 'Mid-transport, your patient with severe agitation suddenly becomes more violent, removing IVs. You have given haloperidol 5 mg + lorazepam 2 mg IM 10 min ago without effect. Best next step?',
        opts: [
          'More haloperidol/lorazepam',
          'Ketamine 4-5 mg/kg IM (excited delirium dose), monitor airway and ventilation closely, document indication and observations',
          'Just hold him down with physical restraints',
          'Stop the ambulance and ask law enforcement to assist'
        ],
        ans: 1,
        exp: {
          correct: 'Severe agitation refractory to first-line chemical restraint, in an environment without good options for prolonged physical restraint = ketamine. 4-5 mg/kg IM works in 3-5 min, dissociative anesthesia, preserves airway reflexes (mostly), bronchodilator. Monitor airway, ventilation, vitals. Document everything: clinical indication, attempts at de-escalation, prior medications, response.',
          wrong: {
            0: 'Stacking benzos and antipsychotics may eventually work but ketamine has faster onset and is the preferred agent for excited delirium / severe agitation in modern protocols.',
            2: 'Physical restraints alone in a moving ambulance with violent agitation is dangerous to crew. Add chemical restraint.',
            3: 'Stopping for law enforcement is fine if needed but doesnt address the underlying agitation.'
          },
          pearl: 'Excited delirium / severe agitation: ketamine is the modern answer. Watch for hyperthermia, rhabdo, acidosis - these patients can deteriorate fast even after sedation. NEVER prone restraint - positional asphyxia kills. Always supine. Continuous monitoring.'
        }
      },
      {
        q: 'You arrive at a single-vehicle MVC with a downed power line on the vehicle. Patient inside is screaming. What do you do?',
        opts: [
          'Approach carefully and check if line is hot',
          'Stay back, establish safety perimeter (at least one full power pole length away, ideally two), call utility company, do NOT approach until utility confirms power off',
          'Touch the vehicle with rubber gloves, attempt rescue',
          'Pull the patient out using a wooden tool'
        ],
        ans: 1,
        exp: {
          correct: 'Downed power lines: stay back, perimeter of one full pole length minimum (ideally two), do not approach until utility confirms de-energized. The vehicle is energized. The ground may be energized (step potential). Wooden tools, rubber gloves, etc. do NOT make this safe - voltages exceed insulation ratings. Tell the patient to stay in the vehicle (theyre safe inside the Faraday cage) until power is off.',
          wrong: {
            0: 'Cant safely check if a line is hot. Treat all downed lines as energized.',
            2: 'EMS rubber gloves are not rated for line voltage. They WILL fail.',
            3: 'Wooden tools are unreliable conductors. Wet wood, microscopic moisture, contamination - they are not insulators at line voltages.'
          },
          pearl: 'Power line rule: stay back, call utility, wait. Step potential can shock you walking near a downed line. Tell the patient to JUMP OUT of the vehicle (not step) and shuffle away with feet together if they MUST exit (rare scenario). Otherwise, stay in vehicle until power is off.'
        }
      },
      {
        q: 'You are operating in an active shooter scene under tactical EMS protocols. You enter the warm zone with law enforcement. You find a patient with significant external hemorrhage from leg. Best action?',
        opts: [
          'Full assessment and stabilization in place',
          'Tactical Combat Casualty Care - Care Under Fire principles: tourniquet for major hemorrhage, encourage self-care if patient capable, move to safer area for full assessment',
          'Wait for LE to clear the entire building',
          'Stop and treat, then move'
        ],
        ans: 1,
        exp: {
          correct: 'TCCC / TEMS doctrine in warm zone (indirect threat): MARCH algorithm - Massive hemorrhage (tourniquet), Airway, Respiration, Circulation, Hypothermia. Tourniquet major bleeds, then move to safer area for fuller care. Care Under Fire phase = limited interventions. Tactical Field Care = fuller treatment in cover. Casualty Evacuation = transport.',
          wrong: {
            0: 'Full assessment in warm zone is exposed and slow. Tourniquet, move, treat in cover.',
            2: 'Waiting for full clear means patients bleed out. Tactical EMS operates in coordinated warm zones with LE.',
            3: 'Treating in place during active threat exposes everyone. Tourniquet then move.'
          },
          pearl: 'TCCC MARCH: Massive hemorrhage first (tourniquet, wound packing). Airway second. Then respiration, circulation, hypothermia. Care Under Fire: fix major bleeds, move. Tactical Field Care (cover/concealment): more thorough. Tactical Evacuation: ALS-level care during transport. The framework saves lives in active threat environments.'
        }
      },
      {
        q: 'During a multi-agency response, your dispatch uses 10-codes ("10-7" for unavailable), but the responding fire department uses plain language ("we are out of service"). What is correct?',
        opts: [
          'Stick with 10-codes since they are faster',
          'Switch to plain language - NIMS standard requires plain language for multi-agency events to avoid miscommunication',
          'Use both alternately to bridge',
          'Continue 10-codes and let fire adapt'
        ],
        ans: 1,
        exp: {
          correct: 'NIMS (National Incident Management System) standard: plain language for multi-agency events. 10-codes vary BY REGION - "10-50" means MVC in some places, signal-something else elsewhere. Multi-agency confusion costs lives. "We are responding to a vehicle accident" is unambiguous. Most agencies have transitioned to plain language even for routine ops.',
          wrong: {
            0: '10-codes are faster only if everyone shares the same code dictionary. They dont.',
            2: 'Mixing dialects in critical communications creates confusion at the worst time. Pick one - and the standard is plain language.',
            3: 'Letting other agencies adapt to your jargon is not how NIMS works. The standard is plain language for everyone.'
          },
          pearl: 'NIMS plain language rule: multi-agency events require plain language. Even within agency, plain language is encouraged. The cost of brevity (10 codes) is not worth the risk of miscommunication, especially with disparate agencies who learned codes in different academies.'
        }
      },
      {
        q: 'You arrive at a possible suicide attempt - patient hanged self, cut down by family. Apparent cardiac arrest, ligature still around neck. What is your management?',
        opts: [
          'Standard CPR, dont touch the ligature - its evidence',
          'Standard ACLS resuscitation including airway management; the ligature can be removed for airway access (document and preserve it for law enforcement)',
          'Refuse resuscitation since likely brain dead',
          'Wait for police before intervening'
        ],
        ans: 1,
        exp: {
          correct: 'Resuscitation comes first. Remove ligature for airway access (document position, preserve in paper bag for law enforcement). Standard ACLS. Many hanging victims survive with prompt resuscitation - airway compromise from ligature, NOT spinal cord injury, is the typical mechanism in incomplete hangings. Even cervical spine injury is less common in incomplete suicide hangings than judicial hangings (different physics).',
          wrong: {
            0: 'Patient care first; evidence preservation second. Cut around or unwind, document position.',
            2: 'Refusing to resuscitate based on assumed prognosis without obvious signs of irreversible death (lividity, rigor, decapitation, etc.) is malpractice.',
            3: 'Patient bleeding to death from suicide attempt waiting for police is wrong. Treat the patient, work alongside law enforcement.'
          },
          pearl: 'Hanging resuscitation: airway is the priority. Many survive with prompt resuscitation. C-spine precautions reasonable but not at the cost of airway. Suicide attempt = mandatory psychiatric evaluation post-resuscitation. Family is often distraught - manage them as well as the patient.'
        }
      },
      {
        q: 'A 35 y/o female with bruising in various stages of healing, defensive wounds, vague stories about "falling." Husband insists on staying in the room. What do you do?',
        opts: [
          'Document objectively, attempt to separate patient from husband for private interview, mandatory report per state law (varies), provide DV resources, do not coerce her to leave',
          'Confront the husband',
          'Tell her she has to leave him',
          'Just patch her up, no documentation needed'
        ],
        ans: 0,
        exp: {
          correct: 'DV scenario. Priority: document objectively (direct quotes, observations of injuries, photos per protocol), separate from suspected perpetrator (e.g., "I need to take her vitals in the back of the rig" or "she needs a private room"), provide resources (hotline numbers, shelter information), respect autonomy (she leaves when she can - on average 7+ attempts before successful), mandatory reporting per state law varies. Most states require reporting injuries from weapons; few mandate DV reporting unless children/elderly involved.',
          wrong: {
            1: 'Confronting suspected abuser escalates risk for the patient AFTER you leave. Document and report through proper channels.',
            2: 'Telling her to leave is paternalistic, ineffective, and puts her at higher risk of escalation. The most dangerous time for a DV victim is when they leave.',
            3: 'No documentation is malpractice. Even if she refuses to engage with the system, document objectively for future reference.'
          },
          pearl: 'DV best practices: separate from perpetrator for assessment, document objectively, provide resources without coercion, respect her process. Children present = mandatory child protection report typically. Elderly = elder abuse report. Document who you spoke to, what was said, what she chose. Compassion plus documentation.'
        }
      },
      {
        q: 'You respond to a pediatric arrest at a daycare. While doing CPR, the daycare director says "the parents are on their way" and asks you to wait until they arrive. What do you do?',
        opts: [
          'Wait for parents before transport',
          'Continue full resuscitation, transport without delay, communicate with parents en route or at hospital, daycare provides any pertinent medical history immediately',
          'Stop resuscitation since the kid looks bad',
          'Transport without resuscitation since parents arent there'
        ],
        ans: 1,
        exp: {
          correct: 'Continue resuscitation, transport WITHOUT delay. Time matters in pediatric arrest. Communicate with parents through dispatch or law enforcement to meet at hospital. Daycare provides medical history (allergies, medications, conditions) before you depart. Implied consent governs care of unaccompanied minors in life-threatening emergencies.',
          wrong: {
            0: 'Waiting wastes precious time. Implied consent applies for life-threatening pediatric emergencies. Transport now.',
            2: 'Stopping pediatric resuscitation early is not standard - peds have better outcomes than adults from prolonged CPR. Continue per ACLS until ROSC, asystole over time, or other criteria met.',
            3: 'Refusing to resuscitate based on lack of parental presence is wrong. Implied consent for emergency care.'
          },
          pearl: 'Pediatric implied consent rule: life-threatening emergency in unaccompanied minor = treat. Document the situation clearly. Communicate with parents ASAP. Daycare/school provides medical history. Transport without delay - kids do better than adults with prolonged resuscitation, and time is brain.'
        }
      },
      {
        q: 'You complete a difficult call (pediatric death). Back at station, your partner wants to "just move on" without debriefing. What is the appropriate response?',
        opts: [
          'Respect his wishes, dont talk about it',
          'Offer/insist on critical incident stress debriefing, peer support, and professional resources; recognize that "moving on" can be denial. Strongly encourage processing - PTSD, suicide, and burnout in EMS are real and not addressed gets worse',
          'Schedule mandatory mental health appointment for him',
          'Tell him to suck it up'
        ],
        ans: 1,
        exp: {
          correct: 'Pediatric death is a high-impact event. Modern EMS recognizes mental health as a serious occupational issue (suicide rates in EMS exceed general population). Critical incident stress debriefing, peer support, and professional resources should be offered. "Moving on" without processing is a risk factor for cumulative stress injury, PTSD, and burnout. Push gently but respect autonomy - cant force, can repeatedly offer.',
          wrong: {
            0: 'Respecting wishes alone misses the prevention opportunity. Open the door and keep it open. Some people need multiple offers before accepting help.',
            2: 'You cant unilaterally schedule someones mental health appointments. Encourage and provide resources. Most agencies have CISM teams or peer support systems.',
            3: '"Suck it up" culture in EMS is what kills providers. Outdated and harmful.'
          },
          pearl: 'EMS mental health: peer support, CISM, EAP, professional therapy. Pediatric calls, mass casualty, deaths involving children of similar age to yours, deaths of close friends/colleagues - high-impact. Watch for warning signs: sleep changes, increased substance use, isolation, irritability, hopelessness. Reach out for partners, not just patients.'
        }
      }

    ]
  }
]

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id)
}

export function getAllScenarios() {
  return CATEGORIES.flatMap(cat =>
    cat.scenarios.map((s, i) => ({ cat, scenario: s, catIndex: i }))
  )
}

export function getAllFlashcards() {
  return CATEGORIES.flatMap(cat =>
    cat.flashcards.map((f, i) => ({ cat, flashcard: f, catIndex: i }))
  )
}
