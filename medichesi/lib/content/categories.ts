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
      { front: 'Pediatric tracheostomy emergency: decannulation', back: 'If tube out: attempt reinsertion with same size or one size smaller. If cannot reinsert: cover stoma and bag via mouth OR bag directly over stoma if upper airway obstructed.' }
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
      { front: 'Manual defibrillation: paddles vs pads', back: 'Pads preferred. Hands-free, continuous monitoring, better contact, safer for provider. Paddles require pressure and gel, higher energy loss.' }
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
      { front: 'Blast injury phases', back: 'Primary: pressure wave (air-filled organs, lungs, ears, bowel). Secondary: fragments/projectiles. Tertiary: body thrown. Quaternary: burns, crush, inhalation.' }
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
      { front: 'Geriatric falls considerations', back: 'Look for underlying cause: syncope, stroke, dysrhythmia, infection, medication side effects. Check glucose, 12-lead, orthostatics. Occult injuries common (subdural, hip fracture). Low-energy mechanism can still be major trauma on anticoagulants.' }
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
      { front: 'Incident Command System basics', back: 'Unified command on large scenes. Single incident commander if single agency. Sections: Operations, Planning, Logistics, Finance/Admin. Span of control 3 to 7 reports.' }
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
