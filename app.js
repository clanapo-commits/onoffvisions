const siteIcons=[['apple-touch-icon','/apple-touch-icon.png'],['icon','/favicon-32x32.png'],['icon','/icon-192.png'],['icon','/icon-512.png'],['manifest','/site.webmanifest']];
siteIcons.forEach(([rel,href])=>{if(!document.head.querySelector(`link[href="${href}"]`)){const link=document.createElement('link');link.rel=rel;link.href=href;if(href.includes('192'))link.sizes='192x192';if(href.includes('512'))link.sizes='512x512';if(href.endsWith('.png'))link.type='image/png';document.head.appendChild(link)}});
const siteFooter=document.querySelector('footer');if(siteFooter){let footerLogo=siteFooter.querySelector('.footer-logo');if(!footerLogo){footerLogo=document.createElement('div');footerLogo.className='footer-logo';siteFooter.prepend(footerLogo)}footerLogo.innerHTML='<span>ONOFF</span><span>VISIONS</span>';let footerFine=siteFooter.querySelector('.fine');if(!footerFine){footerFine=document.createElement('div');footerFine.className='fine';siteFooter.appendChild(footerFine)}footerFine.innerHTML='<span>ON OFF MAG</span><i>|</i><span>2026 All rights reserved</span><i>|</i><span>OKOZOKO LLC</span><i>|</i><a href="mailto:info@onoffmag.com">info@onoffmag.com</a><span class="last-update">Ultimo aggiornamento pacchetto · 17 luglio 2026 · 08:25</span>'}
document.querySelectorAll('header nav').forEach(nav=>{if(!nav.querySelector('a[href$="copertine.html"]')){const link=document.createElement('a');link.href=`${document.body.dataset.base||'.'}/copertine.html`;link.textContent='Copertine';const archive=[...nav.querySelectorAll('a')].find(a=>a.textContent.trim()==='Archivio');nav.insertBefore(link,archive||null)}});
const ARTICLES=[
{n:'198/365',slug:'voce-sintetica-consenso-diritti',title:'La voce sintetica entra nel contratto',cat:'',date:'17 luglio 2026',iso:'2026-07-17',time:'4 minuti',deck:'Clonare una voce è ormai semplice; autorizzarne ogni uso, conservarla in sicurezza e riconoscere il lavoro dell’interprete è la vera infrastruttura che l’industria audiovisiva deve costruire.',tags:['Voce sintetica','Consenso informato','Doppiaggio AI','Diritti degli interpreti','Replica digitale','Produzione audiovisiva'],sources:[['Risorse ufficiali sull’AI e le repliche digitali — SAG-AFTRA','https://www.sagaftra.org/contracts-industry-resources/member-resources/artificial-intelligence'],['Guida alle repliche digitali — SAG-AFTRA','https://www.sagaftra.org/sites/default/files/sa_documents/DigitalReplicas.pdf'],['Accordo sulla voce AI con Replica Studios — SAG-AFTRA','https://www.sagaftra.org/sag-aftra-and-replica-studios-introduce-groundbreaking-ai-voice-agreement-ces'],['Verifica della voce nei sistemi di clonazione — ElevenLabs','https://elevenlabs.io/docs/eleven-api/concepts/voice-cloning'],['Dichiarare i contenuti generati o modificati con AI — YouTube','https://support.google.com/youtube/answer/14328491?hl=it']],body:[`Una voce può essere registrata una volta e pronunciarsi poi in lingue, frasi e contesti che l’interprete non ha mai recitato. Per cinema, doppiaggio, videogiochi e pubblicità è una possibilità produttiva enorme: consente correzioni senza tornare in sala, versioni localizzate più rapidamente e personaggi capaci di reagire in tempo reale. Ma la domanda decisiva non è più se la clonazione funzioni. È chi possa autorizzarla, per quale progetto e fino a quando.`,`Le tutele elaborate da SAG-AFTRA offrono una distinzione utile. Creare una replica digitale e usarla non sono lo stesso atto: entrambi richiedono un consenso informato, chiaro e specifico. L’autorizzazione non dovrebbe essere nascosta nelle condizioni generali né trasformarsi in una licenza illimitata. L’interprete deve sapere quale produzione userà la voce, con quale finalità, per quanto tempo e con quale compenso. Se cambia il progetto, il consenso deve poter essere richiesto di nuovo.`,`Questo principio modifica il lavoro quotidiano più della tecnologia stessa. Una produzione non può trattare il modello vocale come un semplice file audio consegnato insieme alle registrazioni. Deve documentarne la provenienza, collegarlo alle autorizzazioni, limitare gli accessi e stabilire cosa accade alla fine del contratto. La voce sintetica diventa così un bene professionale governato: non soltanto un risultato tecnico, ma un’identità con diritti e responsabilità.`,`Nel doppiaggio AI il vantaggio più evidente è la continuità espressiva tra le lingue. Il modello può conservare timbro, ritmo e intenzione dell’interprete originale mentre modifica le parole e, in alcuni sistemi, anche il labiale. L’approfondimento comincia però dove termina la promessa commerciale: una voce credibile non garantisce una traduzione corretta, una recitazione adeguata alla cultura di destinazione o il rispetto del senso della scena. Traduttori, dialoghisti, doppiatori e direttori restano necessari per trasformare una conversione automatica in interpretazione.`,`Anche la verifica tecnica ha un limite preciso. ElevenLabs spiega che la propria clonazione professionale utilizza un controllo vocale per confermare l’identità di chi fornisce i campioni. È una protezione importante, ma non risolve da sola la catena dei diritti: dopo la creazione occorre controllare chi genera nuove battute, dove vengono pubblicate e se l’uso corrisponde davvero all’autorizzazione ricevuta. Sicurezza del modello, registro delle generazioni e possibilità di cancellazione diventano parti del workflow audiovisivo.`,`C’è infine la relazione con il pubblico. YouTube richiede ai creator di dichiarare i contenuti realistici generati o modificati con AI, compresi gli interventi audio capaci di far sembrare che una persona abbia detto qualcosa che non ha detto. Nei titoli di coda di un film o nella scheda di un contenuto, una formula utile dovrebbe andare oltre “voce AI”: può indicare l’interprete, il tipo di replica, la funzione svolta e il controllo umano applicato. La trasparenza non rovina l’illusione; rende leggibile il lavoro che l’ha costruita.`,`Il vero salto, quindi, non consiste nel far parlare una macchina con una voce umana. Consiste nel progettare un sistema in cui quella voce resti riconoscibile come lavoro, autorizzata a ogni passaggio e revocabile quando necessario. La qualità del futuro audio si misurerà non soltanto dall’assenza di artefatti, ma dalla precisione con cui tecnologia, contratto e responsabilità sapranno parlare insieme.`]},
{n:'197/365',slug:'video-ai-diventa-infrastruttura',title:'Il video AI diventa un’infrastruttura',cat:'',date:'16 luglio 2026',iso:'2026-07-16',time:'4 minuti',deck:'Runway riunisce modelli, flussi e personaggi interattivi in una sola piattaforma per sviluppatori: la produzione audiovisiva generativa comincia a trasformarsi in un sistema programmabile.',tags:['Runway Dev','Video AI','Flussi di lavoro','Interfacce di programmazione','Personaggi interattivi','Produzione audiovisiva'],sources:[['Runway presenta Runway Dev — annuncio ufficiale, 8 luglio 2026','https://runwayml.com/news/introducing-runway-dev'],['Documentazione ufficiale Runway Dev','https://docs.dev.runwayml.com/'],['Video a più inquadrature — documentazione ufficiale','https://docs.dev.runwayml.com/recipes/multi-shot-video/'],['Personaggi interattivi — documentazione ufficiale','https://docs.dev.runwayml.com/characters/']],body:[`Finora il video generativo è stato raccontato soprattutto come uno strumento da aprire: si sceglie un modello, si scrive un’istruzione, si attende una clip. Il lancio di Runway Dev, annunciato l’8 luglio 2026, suggerisce un passaggio diverso. Immagini, video, audio e personaggi in tempo reale vengono riuniti in una piattaforma pensata per essere collegata direttamente a prodotti e flussi di lavoro. L’AI audiovisiva non è più soltanto una destinazione: diventa un’infrastruttura programmabile.`,`La proposta combina modelli proprietari di Runway, tra cui Gen-4.5, Aleph 2.0 e Act-Two, con sistemi di altre aziende. Secondo Runway, cambiare modello può richiedere una sola riga di codice, mentre costi e utilizzo restano visibili in un unico pannello. Per uno studio o una piattaforma questo significa poter scegliere lo strumento adatto a ogni fase senza ricostruire ogni volta l’intera integrazione.`,`Il livello più interessante è quello dei flussi personalizzati. Più modelli e operazioni possono essere collegati in una sequenza privata e richiamati attraverso un solo punto di accesso. Un processo potrebbe ricevere un soggetto, generare uno storyboard, produrre le inquadrature, creare varianti linguistiche e consegnare i materiali al montaggio. La ripetibilità diventa parte della regia produttiva: non si conserva soltanto un’istruzione, ma la struttura delle decisioni che porta al risultato.`,`Runway introduce anche ricette preconfigurate per compiti specifici, dalla localizzazione pubblicitaria ai video composti da più inquadrature. Sono scorciatoie utili, ma spostano una parte della competenza creativa dentro il servizio. Se una ricetta incorpora scelte di ritmo, composizione e continuità, chi la usa deve capire quali decisioni riceve già pronte e quali può ancora controllare. L’automazione accelera il lavoro solo quando non rende invisibile il linguaggio che sta applicando.`,`La stessa piattaforma include personaggi interattivi dotati di voce, strumenti e base di conoscenza. Qui il video non è più un file concluso: diventa una presenza che reagisce allo spettatore. Per formazione, intrattenimento e contenuti narrativi significa immaginare figure audiovisive capaci di cambiare risposta in tempo reale. Restano centrali consenso, identità, sicurezza e chiarezza sull’origine sintetica del personaggio.`,`Per cinema e produzione video, la novità non consiste quindi nell’ennesimo modello più spettacolare. È la trasformazione della generazione in una componente invisibile di sistemi più grandi. Quando l’AI entra nelle interfacce, nei gestionali e nelle catene di consegna, il problema creativo diventa progettare il flusso: stabilire dove automatizzare, dove scegliere, dove verificare e chi risponde del risultato. Il futuro del video AI potrebbe assomigliare meno a una finestra con un prompt e più a una sala di regia costruita con il codice.`]},
{n:'196/365',slug:'adobe-topaz-post-produzione-ai',title:'Adobe sceglie Topaz per la post-produzione AI',cat:'',date:'15 luglio 2026',iso:'2026-07-15',time:'4 minuti',deck:'L’acquisizione annunciata unisce gli strumenti Adobe ai modelli di Topaz per restauro, upscaling e finitura: il vero terreno decisivo del video AI si sposta sulla qualità finale.',tags:['Adobe','Topaz Labs','Post-produzione','Upscaling','Restauro video','AI locale'],sources:[['Adobe annuncia l’accordo per acquisire Topaz Labs','https://news.adobe.com/news/2026/06/adobe-to-acquire-topaz-labs'],['Funzioni e modelli di Topaz Video — documentazione ufficiale','https://docs.topazlabs.com/topaz-video/quick-start'],['Topaz Labs per Adobe Premiere — documentazione ufficiale','https://docs.topazlabs.com/topaz-video/topaz-panel'],['NeuroStream 2 e accelerazione locale su Mac — Topaz Labs','https://www.topazlabs.com/news/the-mac-is-faster-update---june-2026']],body:[`La parte più spettacolare dell’AI video è la generazione. Quella che decide se un’immagine può davvero entrare in un film, però, arriva dopo: riduzione del rumore, recupero dei dettagli, stabilizzazione, interpolazione dei fotogrammi, conversione della gamma dinamica e aumento della risoluzione. È in questo territorio meno visibile ma decisivo che si colloca l’accordo annunciato da Adobe per acquisire Topaz Labs.`,`Topaz ha costruito la propria reputazione proprio nella finitura delle immagini. I suoi modelli non inventano semplicemente una scena: analizzano un materiale esistente e cercano di renderlo più leggibile, stabile o adatto alla distribuzione. Topaz Video comprende strumenti per upscaling, denoise, motion deblur, rallentatore, stabilizzazione e conversione da SDR a HDR. Sono funzioni utili per vecchi archivi, riprese difficili e contenuti generativi che spesso nascono con difetti temporali o una definizione insufficiente.`,`Adobe dichiara di voler integrare questa tecnologia in Firefly, Firefly Services e nelle applicazioni Creative Cloud. L’operazione deve ancora completarsi ed è soggetta alle consuete autorizzazioni; nel frattempo, secondo l’annuncio, i prodotti Topaz continueranno a essere disponibili anche come strumenti autonomi. Non significa quindi che domani Premiere cambierà improvvisamente, ma indica con chiarezza la direzione: generazione e finishing stanno diventando parti dello stesso ecosistema.`,`Un elemento particolarmente interessante è NeuroStream, la tecnologia sviluppata da Topaz per eseguire modelli complessi sui dispositivi degli utenti. L’elaborazione locale può ridurre i tempi di trasferimento, proteggere meglio materiali riservati e rendere più prevedibili i costi rispetto a un flusso interamente affidato al cloud. Topaz ha già introdotto un pannello per Premiere collegato ai suoi servizi cloud e dispone di integrazioni con After Effects e DaVinci Resolve: l’acquisizione può trasformare collegamenti ancora separati in un processo più continuo.`,`Per chi lavora nel cinema o nel video, il vantaggio non consiste soltanto nel rendere tutto più nitido. Ogni intervento di miglioramento ricostruisce informazioni che nel file originale non esistono più o non sono mai esistite. Il rischio è confondere dettaglio plausibile e dettaglio autentico, soprattutto nel restauro documentario, nelle immagini d’archivio e nei volti. Servono confronti con il materiale originale, controlli fotogramma per fotogramma e la possibilità di regolare quanto il modello può interpretare.`,`La mossa di Adobe mostra così una nuova fase dell’industria: dopo la corsa ai generatori, comincia quella agli strumenti capaci di rendere utilizzabile ciò che viene generato. La qualità finale non dipenderà da un solo modello, ma dalla catena che collega ripresa, sintesi, montaggio, correzione e consegna. L’AI entra davvero nella post-produzione quando smette di essere un effetto e diventa una scelta controllabile.`]},
{n:'195/365',slug:'volto-sintetico-sembra-piu-vero',title:'Il volto sintetico ci sembra più vero',cat:'',date:'14 luglio 2026',iso:'2026-07-14',time:'4 minuti',deck:'Una nuova ricerca mostra che i volti generati dall’AI possono apparire più familiari e affidabili di quelli reali, mentre il cervello continua a elaborarli in modo diverso.',tags:['Volti sintetici','Percezione','Fiducia','Deepfake','Neuroscienze'],sources:[['Studio originale — Scientific Reports','https://www.nature.com/articles/s41598-026-59487-7'],['Comunicazione della ricerca — Università di Milano-Bicocca','https://www.unimib.it/news/volti-creati-dallintelligenza-artificiale-cervello-li-riconosce-anche-quando-mente-si-lascia'],['Studio sulla capacità di riconoscere i volti AI — UNSW Sydney','https://www.unsw.edu.au/newsroom/news/2026/02/humans-overconfident-telling-AI-faces-real-faces-people-fake']],body:[`Il volto è il primo luogo nel quale cerchiamo una persona. Da uno sguardo ricaviamo identità, intenzioni, emozioni e perfino una misura istintiva di fiducia. Proprio per questo i volti generati dall’AI rappresentano qualcosa di più di un progresso tecnico: intervengono in uno dei meccanismi più rapidi e profondi della percezione umana.`,`Una ricerca dell’Università di Milano-Bicocca, pubblicata su Scientific Reports il 30 giugno 2026, ha osservato questa relazione attraverso l’elettroencefalografia. Trenta partecipanti hanno guardato 440 immagini, metà reali e metà prodotte con sistemi generativi. Dovevano giudicare origine, familiarità e attrattiva dei volti mentre 128 sensori registravano l’attività cerebrale.`,`I risultati mostrano una frattura tra ciò che decidiamo consapevolmente e ciò che il cervello elabora. I partecipanti hanno identificato correttamente come artificiali soltanto il 33 per cento dei volti sintetici, quindi meno di quanto ci si aspetterebbe scegliendo a caso. Eppure i segnali neurali distinguevano ancora le immagini generate da quelle fotografiche, attivando diversamente reti connesse al riconoscimento, alla memoria e alla valutazione emotiva.`,`Il dato forse più significativo riguarda la fiducia. I volti AI sono stati giudicati più familiari, attraenti e affidabili. Non perché ricordassero persone realmente conosciute, ma perché i generatori tendono a costruire fisionomie regolari e prototipiche: visi statisticamente medi, simmetrici, privi di molte irregolarità individuali. La macchina non crea soltanto un volto credibile; può produrre il volto che il nostro sistema percettivo considera più facile da accettare.`,`Per cinema, pubblicità, avatar e personaggi digitali questa caratteristica è potentissima. Un volto sintetico può conquistare immediatamente lo spettatore senza possedere una storia, un corpo o un’identità reale. La scelta estetica diventa quindi anche una scelta psicologica: quanto deve essere rassicurante un personaggio e quando quella familiarità rischia di trasformarsi in manipolazione?`,`Lo studio non dimostra che il cervello possieda un infallibile rivelatore di deepfake. L’esperimento riguarda immagini statiche e un gruppo limitato di persone; inoltre una differenza neurale non si traduce automaticamente in una decisione cosciente. Indica però che l’apparenza fotografica non basta più come prova di autenticità e che il nostro senso di fiducia può essere influenzato prima ancora di una valutazione razionale.`,`La nuova frontiera del volto artificiale non è dunque la perfezione visiva. È la capacità di sembrare subito vicino, noto e credibile. Quando l’immagine sintetica supera la valle perturbante, non smette di produrre effetti: li sposta dal disagio evidente a una persuasione più silenziosa.`]},
{n:'194/365',slug:'contenuti-sintetici-regole-trasparenza',title:'Contenuti sintetici: le nuove regole cambiano il set',cat:'',date:'13 luglio 2026',iso:'2026-07-13',time:'7 minuti',deck:'Dal 2 agosto la trasparenza prevista dal regolamento europeo sull’AI entra nella pratica: per chi produce immagini, video e audio non basta più affidarsi a una nota generica.',tags:['Contenuti sintetici','Trasparenza','Regolamento europeo','Crediti','Produzione audiovisiva'],sources:[['Regolamento europeo sull’AI, articolo 50 — EUR-Lex','https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng'],['Codice di buone pratiche sui contenuti generati dall’AI — Commissione europea','https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content'],['Indicazioni sulle icone europee — Commissione europea','https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content']],body:[`Mancano meno di tre settimane al 2 agosto 2026, data dalla quale diventano applicabili nell’Unione europea gli obblighi di trasparenza dell’articolo 50 del regolamento europeo sull’AI. Per cinema, pubblicità, videoclip, contenuti social e post-produzione non è una questione astratta: riguarda il modo in cui un’immagine sintetica viene prodotta, riconosciuta e dichiarata al pubblico. La novità più importante è che la trasparenza non coincide con un’unica etichetta. Cambia a seconda di chi fornisce lo strumento, di chi lo utilizza e del tipo di contenuto realizzato.`,`Ai fornitori dei sistemi generativi è richiesto di rendere rilevabili in formato leggibile dalla macchina i contenuti artificialmente generati o manipolati. In pratica, il segnale dovrebbe viaggiare insieme al file ed essere tecnicamente individuabile. A chi impiega professionalmente quei sistemi spetta invece la comunicazione al pubblico quando immagini, audio o video costituiscono un contenuto sintetico capace di apparire autentico. Sono due livelli complementari: una traccia tecnica per gli strumenti e una dichiarazione comprensibile per le persone.`,`Per le opere chiaramente artistiche, creative, satiriche o di finzione, il regolamento introduce una forma di equilibrio. La dichiarazione deve esistere, ma può essere presentata in modo appropriato, senza ostacolare la visione o compromettere l’esperienza dell’opera. Questo passaggio è particolarmente rilevante per il cinema: non obbliga a interrompere ogni sequenza con un avviso invasivo, ma chiede di rendere conoscibile l’origine sintetica attraverso crediti, schede dell’opera, descrizioni o altri punti coerenti con il contesto di distribuzione.`,`Il termine “AI” nei titoli di coda, però, rischia di essere troppo vago. Un modello può essere stato usato per una voce, per estendere una scenografia, sostituire un volto, creare una folla, tradurre il labiale o generare un’intera inquadratura. Una dichiarazione utile dovrebbe indicare almeno la parte interessata, la funzione svolta dallo strumento e il controllo esercitato dalla produzione. Non serve pubblicare il diario completo del processo: serve evitare che interventi profondamente diversi vengano nascosti dentro una formula indistinta.`,`Il Codice di buone pratiche pubblicato dalla Commissione europea offre un percorso volontario per dimostrare la conformità, mentre le icone europee possono aiutare a rendere uniforme la segnalazione. L’uso delle icone è facoltativo e, da solo, non prova il rispetto della norma. Per una produzione audiovisiva la soluzione più robusta resta quindi un sistema a strati: informazioni tecniche conservate nel file quando disponibili, una dichiarazione visibile nel punto di pubblicazione e crediti più precisi per chi desidera comprendere il processo.`,`Da oggi conviene trattare la provenienza come un elemento del flusso produttivo, non come una scritta aggiunta all’ultimo minuto. Significa annotare quali strumenti entrano in pre-produzione, ripresa, montaggio, effetti visivi e suono; conservare le versioni; verificare che l’esportazione non elimini i metadati; concordare con piattaforme e distributori dove apparirà la dichiarazione. Questo registro protegge anche il lavoro umano, perché permette di distinguere ciò che è stato generato da ciò che è stato diretto, interpretato, fotografato o composto.`,`La trasparenza non riduce il valore creativo dell’AI. Può fare il contrario: sposta l’attenzione dal sospetto alla scelta. Quando lo spettatore sa che una parte dell’immagine è sintetica, può giudicare come è stata usata, non soltanto tentare di scoprire se è “vera”. Per il cinema e il video, la scadenza di agosto è quindi l’inizio di una grammatica nuova dei crediti: meno mistero sul processo, più responsabilità sul significato.`]},
{n:'193/365',slug:'ai-puo-avere-intuizione',title:'L’AI può avere un’intuizione?',cat:'Culture',date:'12 luglio 2026',iso:'2026-07-12',time:'7 minuti',deck:'Risolvere un problema non significa necessariamente comprenderlo. Ma la distinzione sta diventando più difficile.',tags:['Intuizione artificiale','Ricerca scientifica','Comprensione','Coscienza'],body:[`Quando un sistema di intelligenza artificiale contribuisce a risolvere un problema scientifico rimasto aperto per anni, la parola “strumento” sembra improvvisamente insufficiente. Non perché la macchina abbia necessariamente coscienza, ma perché il suo ruolo non coincide più con quello di una calcolatrice.`,`I modelli possono esplorare enormi spazi di possibilità, individuare correlazioni e proporre passaggi che un ricercatore non aveva considerato. Il risultato può apparire come un’intuizione. Nell’esperienza umana, però, intuire significa anche riconoscere il valore di una scoperta, inserirla in una storia e comprenderne le conseguenze.`,`Un sistema può produrre una soluzione corretta senza possedere un’esperienza del problema. Questa distinzione ci obbliga a separare capacità, comprensione e coscienza, tre concetti spesso confusi nella comunicazione sull’AI.`,`La collaborazione più fertile nasce da un rapporto nel quale l’AI amplia lo spazio esplorabile e il ricercatore verifica, interpreta e attribuisce significato. Forse la domanda non è se la macchina pensi come noi, ma se ci costringa a guardare in modo nuovo ciò che chiamiamo pensiero.`]},
{n:'192/365',slug:'quando-ai-acquista-un-corpo',title:'Quando l’AI acquista un corpo',cat:'Physical AI',date:'11 luglio 2026',iso:'2026-07-11',time:'6 minuti',deck:'La prossima rivoluzione non resterà dentro lo schermo: entrerà nelle fabbriche e negli spazi progettati per le persone.',tags:['Physical AI','Robot umanoidi','Cina','Manifattura','Automazione'],body:[`Negli ultimi anni abbiamo identificato l’intelligenza artificiale con la capacità di scrivere, produrre immagini e generare video. La Physical AI cambia la scala del discorso: collega i modelli a sensori, motori e macchine capaci di agire nel mondo.`,`Il robot umanoide è la forma più visibile di questa trasformazione perché può muoversi negli ambienti già costruiti per il corpo umano. Ma la somiglianza esteriore non basta: camminare è ormai una dimostrazione spettacolare, mentre usare le mani con precisione resta una delle difficoltà decisive.`,`La competizione riguarda l’intera filiera. Attuatori, batterie, sensori, componenti e capacità produttiva contano quanto gli algoritmi. L’ingresso nella vita quotidiana sarà probabilmente graduale: prima fabbriche e magazzini, poi ospedali, servizi e abitazioni.`,`I robot che ballano sono il trailer. Il film comincia quando una macchina diventa abbastanza affidabile da lavorare otto ore accanto a una persona.`]},
{n:'191/365',slug:'riconoscere-video-ai',title:'Chi riconosce un video creato dall’AI?',cat:'',date:'10 luglio 2026',iso:'2026-07-10',time:'6 minuti',deck:'Le immagini sintetiche diventano più credibili. Piattaforme e spettatori devono imparare a riconoscerle senza distruggere la fiducia nel video.',tags:['Contenuti sintetici','Trasparenza','AI labels','Creator','Identità'],body:[`Per anni abbiamo cercato gli errori: mani deformi, movimenti impossibili, scritte senza senso. Oggi questi indizi stanno scomparendo. Riconoscere un video generato dall’intelligenza artificiale non può più dipendere soltanto dall’occhio dello spettatore.`,`Le piattaforme stanno introducendo etichette, dichiarazioni degli autori e sistemi automatici di rilevamento. È un passaggio necessario, ma non semplice. La presenza dell’AI può riguardare l’intero video oppure soltanto un’inquadratura, una voce, una correzione o un elemento dello sfondo. Un’unica etichetta rischia di mettere sullo stesso piano processi molto diversi.`,`Per chi crea immagini, la trasparenza non dovrebbe essere interpretata come una confessione. Può diventare parte dei crediti: quali strumenti sono stati utilizzati, in quali fasi e con quale controllo umano. Dichiarare il processo permette di valutare meglio il lavoro invece di ridurlo alla domanda “vero o falso?”.`,`La sfida non è soltanto riconoscere l’artificiale. È conservare la fiducia nel video come linguaggio. Servono informazioni leggibili, standard condivisi e una cultura visiva capace di distinguere manipolazione, sperimentazione e inganno.`]},
{n:'190/365',slug:'oltre-il-prompt',title:'Oltre il prompt',cat:'AI Filmmaking',date:'9 luglio 2026',iso:'2026-07-09',time:'6 minuti',deck:'Il video generativo smette di essere una dimostrazione e prova a diventare cinema.',tags:['Video generativo','Workflow','Continuità visiva','Regia','Post-produzione'],body:[`Per molto tempo il video generativo è stato giudicato attraverso una singola inquadratura. Il cinema, però, comincia quando un’immagine deve dialogare con quella successiva.`,`La vera sfida è la continuità. Un personaggio deve conservare volto, costume e intenzione; lo spazio deve possedere una geografia; la luce deve cambiare con una logica. Senza controllo, il risultato rimane una successione di incidenti visivi.`,`Per questo il lavoro si sposta dal prompt al workflow. Immagini di riferimento, storyboard, controllo della camera, maschere, compositing, montaggio e colore diventano più importanti della singola frase data al modello.`,`Il passaggio decisivo avverrà quando smetteremo di chiedere con quale modello è stato fatto e torneremo a domandare perché questa inquadratura è qui. La tecnologia diventa cinema soltanto quando una scelta visiva produce significato.`]},
{n:'189/365',slug:'attrice-che-non-esiste',title:'L’attrice che non esiste',cat:'AI Cinema',date:'8 luglio 2026',iso:'2026-07-08',time:'7 minuti',deck:'Il cinema ha sempre costruito illusioni. Oggi, però, può costruire anche chi le interpreta.',tags:['Attori sintetici','Casting','Identità digitale','Diritti d’immagine'],body:[`Un volto appare sullo schermo. Ha uno sguardo riconoscibile, una voce e un modo di muoversi. Eppure non è mai nato. L’arrivo degli interpreti sintetici trasforma una convenzione profonda del cinema: dietro il personaggio non deve più esserci necessariamente una persona.`,`Un attore non è un insieme di lineamenti coerenti fotogramma dopo fotogramma. Porta nel film un corpo, una memoria e la capacità di reagire. Un personaggio generativo nasce invece da decisioni distribuite tra modello, dataset, prompt, regia e post-produzione.`,`Chi firma allora la performance? Il regista, chi costruisce il workflow, gli attori presenti nei dati o l’azienda proprietaria del modello? La parola attore rischia di nascondere un processo che somiglia alla progettazione di una creatura audiovisiva.`,`Il cinema non deve rifiutare questi personaggi. Deve però nominarli correttamente, dichiararne l’origine e rendere visibile il lavoro umano che li costruisce. L’illusione può restare sullo schermo; la trasparenza deve esistere nei crediti.`]}
];
const FLASH_ITEMS=[
 'La voce sintetica entra nei contratti: consenso specifico, compenso e controllo diventano parte del workflow audiovisivo',
 'Runway Dev riunisce modelli per immagini, video, audio e personaggi in tempo reale',
 'Adobe annuncia l’accordo per acquisire Topaz Labs e rafforzare la post-produzione AI',
 'Runway apre a Parigi un nuovo centro di ricerca dedicato ai modelli del mondo e all’AI applicata al mondo fisico'
];
const SOURCES={
 'ai-puo-avere-intuizione':[
  ['Meta-progettare esperimenti quantistici con modelli linguistici — Nature Machine Intelligence','https://www.nature.com/articles/s42256-025-01153-0'],
  ['Scoperte matematiche attraverso la ricerca di programmi — Nature','https://www.nature.com/articles/s41586-023-06924-6'],
  ['Scoperta di algoritmi con modelli linguistici — Nature Communications','https://www.nature.com/articles/s41467-026-74003-1']
 ],
 'quando-ai-acquista-un-corpo':[
  ['Robot umanoide G1 — Unitree','https://www.unitree.com/g1'],
  ['Guida per sviluppatori G1 — Unitree','https://support.unitree.com/home/en/G1_developer'],
  ['Densità globale dei robot nelle fabbriche — International Federation of Robotics','https://ifr.org/ifr-press-releases/news/global-robot-density-in-factories-doubled-in-seven-years']
 ],
 'riconoscere-video-ai':[
  ['Standard tecnico per la provenienza dei contenuti — C2PA','https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html'],
  ['Dichiarazione dei contenuti alterati o sintetici — YouTube','https://support.google.com/youtube/answer/15447836?hl=it'],
  ['Content Credentials: come funziona la provenienza digitale','https://contentcredentials.org/']
 ],
 'oltre-il-prompt':[
  ['Introduzione a Runway Gen-4 — Runway','https://runwayml.com/research/introducing-runway-gen-4'],
  ['Generare video a partire da immagini — Adobe Firefly','https://helpx.adobe.com/firefly/web/work-with-audio-and-video/work-with-video/generate-videos-using-images.html'],
  ['Modelli video partner in Firefly Boards — Adobe','https://helpx.adobe.com/firefly/web/create-mood-boards/firefly-boards/partner-models-to-generate-videos.html']
 ],
 'attrice-che-non-esiste':[
  ['Risorse sull’intelligenza artificiale — SAG-AFTRA','https://www.sagaftra.org/contracts-industry-resources/member-resources/artificial-intelligence'],
  ['Rapporto sulle repliche digitali — U.S. Copyright Office','https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-1-Digital-Replicas-Report.pdf'],
  ['Repliche digitali, deepfake e persone sintetiche — SAG-AFTRA','https://www.sagaftra.org/videos/digital-replicas-deepfakes-synthetic-humans']
 ]
};
// Standard editoriale: circa 300–400 parole e 4 minuti di lettura.
const BODY_ADDITIONS={
 'ai-puo-avere-intuizione':[
  `La questione diventa concreta quando una proposta della macchina entra davvero nel metodo scientifico. Un risultato inatteso non viene accettato perché sembra brillante: deve essere riproducibile, spiegabile e confrontato con ciò che già sappiamo. L’AI può accelerare la formulazione delle ipotesi, ma la verifica resta un lavoro collettivo fatto di esperimenti, errori e discussione. In questo senso l’intuizione artificiale non sostituisce quella umana: introduce nuove possibilità che qualcuno deve ancora riconoscere e mettere alla prova.`,
  `Anche il linguaggio con cui raccontiamo queste scoperte merita cautela. Dire che un modello “ha capito” rende immediato un processo complesso, ma rischia di attribuirgli intenzioni che non possiamo dimostrare. È più utile descrivere che cosa ha prodotto, quali dati ha utilizzato e dove è intervenuto il ricercatore. La precisione non riduce lo stupore: ci permette di distinguere una capacità reale dalla narrazione costruita intorno ad essa.`
 ],
 'quando-ai-acquista-un-corpo':[
  `Per l’audiovisivo questa evoluzione non riguarda soltanto i soggetti dei film. Robot addestrati attraverso simulazioni e modelli visivi possono entrare nei teatri di posa, movimentare camere, ripetere traiettorie, assistere alla costruzione dei set o acquisire ambienti. Il vantaggio non sarà la forma umanoide in sé, ma la capacità di collegare percezione, decisione e gesto. Ogni impiego dovrà però confrontarsi con sicurezza, responsabilità e organizzazione del lavoro.`,
  `Il vero salto avverrà quando questi sistemi sapranno adattarsi all’imprevisto senza diventare pericolosi. Una fabbrica è controllabile; un set cambia continuamente, contiene persone, cavi, luci e decisioni dell’ultimo minuto. La Physical AI sarà credibile quando saprà leggere questa complessità e fermarsi quando non è sicura. Serviranno protocolli condivisi, supervisione umana e una chiara attribuzione delle responsabilità. L’autonomia, prima ancora di essere spettacolare, dovrà diventare affidabile e comprensibile.`
 ],
 'riconoscere-video-ai':[
  `Una parte della risposta può arrivare dalla provenienza digitale. Standard come C2PA permettono di associare al file informazioni sulla sua origine e sulle modifiche ricevute. Non sono una prova assoluta: i metadati possono andare perduti e molti strumenti non li supportano ancora. Offrono però qualcosa di più solido della caccia all’errore visivo, perché spostano la domanda dall’aspetto dell’immagine alla storia documentata del contenuto.`,
  `Per funzionare, questo sistema deve essere semplice anche per chi guarda. Un simbolo può segnalare la presenza di informazioni aggiuntive; una scheda può spiegare quali parti sono state generate; i crediti possono indicare strumenti e responsabilità. Nessun livello basta da solo. Insieme, dichiarazione dell’autore, traccia tecnica e verifica editoriale possono costruire una fiducia meno ingenua e più informata.`
 ],
 'oltre-il-prompt':[
  `I nuovi strumenti stanno già introducendo riferimenti visivi, immagini iniziali e finali, controllo del movimento e possibilità di modificare soltanto una parte dell’inquadratura. Il regista non ottiene ancora una macchina da presa perfettamente prevedibile, ma può costruire una catena di decisioni più precisa. La qualità nasce dalla combinazione: generazione per esplorare, montaggio per scegliere, compositing per correggere e suono per dare continuità al mondo.`,
  `Questo cambia anche le competenze richieste. Scrivere una buona istruzione rimane utile, ma non basta. Servono cultura dell’immagine, capacità di selezione, conoscenza della post-produzione e attenzione alla coerenza narrativa. Diventano centrali anche la gestione delle versioni, la documentazione delle fonti e la capacità di mantenere una direzione visiva attraverso strumenti differenti. Il prompt è l’inizio di una conversazione con il sistema; il film è il risultato di tutto ciò che viene deciso dopo, compreso ciò che si sceglie di non usare.`
 ],
 'attrice-che-non-esiste':[
  `Il problema diventa ancora più delicato quando il personaggio sintetico assomiglia a una persona reale o deriva dalla combinazione di molte interpretazioni registrate. Volto, voce e movimento non sono materiali neutri: appartengono a identità e carriere. Consenso, compenso, durata dell’autorizzazione e possibilità di revoca devono essere definiti prima che la replica entri nel flusso produttivo, non quando il film è già finito.`,
  `Esiste poi una domanda estetica. Un interprete sintetico può essere perfettamente coerente e tuttavia non produrre sorpresa, fragilità o resistenza. La recitazione nasce spesso da ciò che sfugge al controllo, dall’incontro tra corpi e dalla risposta a ciò che accade sul set. La sfida creativa non sarà rendere questi volti indistinguibili dagli attori, ma capire quali storie possono raccontare e quale nuovo tipo di presenza costruiscono davanti allo spettatore.`
 ]
};
const PROJECT={n:'000/365',slug:'perche-onoff-visions',title:'Perché ONOFF VISIONS',cat:'',date:'12 luglio 2026',iso:'2026-07-12',time:'2 minuti',deck:'Un progetto editoriale quotidiano per osservare come l’intelligenza artificiale sta trasformando cinema, video, software e cultura visiva.',tags:['Un articolo al giorno','Cinema','Video','Tecnologie creative','AI'],body:[`Le immagini stanno cambiando. L’intelligenza artificiale non sta trasformando soltanto il modo in cui vengono generate, ma anche come cinema e video vengono pensati, prodotti e distribuiti.`,`ONOFF VISIONS nasce per raccontare questa trasformazione mentre accade.`,`Ogni giorno pubblicheremo un nuovo articolo dedicato a film realizzati con l’AI, video generativo, software, workflow, montaggio, VFX, audio, diritti, piattaforme e cambiamenti dell’industria audiovisiva.`,`Le notizie saranno verificate, confrontate e rielaborate in testi originali. Ogni articolo includerà anche fonti e riferimenti utili per approfondire gli argomenti trattati.`,`La homepage raccoglierà i dodici articoli più recenti. Tutti gli altri resteranno consultabili nell’Archivio, costruendo giorno dopo giorno una cronologia dell’intelligenza artificiale applicata alle immagini.`,`ONOFF VISIONS è un progetto di ONOFFMAG diretto da Claudio Napoli, tra Roma e New York.`]};
Object.assign(PROJECT,{
 title:'L’innovazione, raccontata mentre accade.',
 deck:'ONOFF VISIONS è un esperimento editoriale creato attraverso ChatGPT Work: un sistema progettato per ricercare, scrivere, creare immagini e pubblicare un articolo ogni giorno.',
 time:'5 minuti',
 tags:['ChatGPT Work','Automazione editoriale','Creatività generativa','Archivio fotografico','Controllo umano','365 articoli'],
 body:[
  `ONOFF VISIONS è un osservatorio editoriale dedicato all’incontro tra intelligenza artificiale, cinema, filmmaking, video generativo e tecnologie creative.`,
  `La sua innovazione non riguarda soltanto gli argomenti raccontati. Il progetto nasce e si sviluppa attraverso l’AI: dalla ricerca e dal confronto delle fonti alla scrittura degli articoli, dalla creazione delle copertine all’organizzazione dell’Archivio, fino alla pubblicazione e ai controlli di qualità.`,
  `Il sito riceve inizialmente un’impronta umana precisa: identità, linguaggio, criteri editoriali, stile grafico e regole di selezione dei contenuti. Dopo una prima fase di supervisione manuale, necessaria per verificarne qualità, attendibilità e coerenza, ONOFF VISIONS è progettato per diventare progressivamente autonomo.`,
  `ONOFF VISIONS è stato creato interamente attraverso ChatGPT Work e sarà gestito mediante le sue nuovissime funzioni. Il sistema coordinerà ricerca, scrittura, creatività visiva, aggiornamento delle pagine, pubblicazione e verifica, mentre la direzione umana continuerà a definirne identità, responsabilità e orientamento editoriale.`,
  `Il suo cuore AI sarà in grado di ricercare ogni giorno le notizie più interessanti e innovative, confrontare le fonti, individuare il tema da approfondire, scrivere un articolo originale, controllarne la qualità e aggiornare il sito pubblicando un nuovo contenuto quotidiano.`,
  `Saranno pubblicati 365 articoli all’anno, uno per ogni giorno, e 366 negli anni bisestili. Ogni articolo entrerà in una cronologia permanente: i dodici contenuti più recenti resteranno in homepage, mentre tutti gli altri continueranno a vivere nell’Archivio.`,
  `Il cuore AI di ONOFF VISIONS creerà anche una copertina originale per ogni articolo: 365 nuove immagini all’anno, o 366 negli anni bisestili. Ogni immagine nascerà dall’incontro tra il contenuto dell’articolo e un database composto dalle fotografie originali di Claudio Napoli.`,
  `L’archivio fotografico umano diventa così materia viva per un nuovo processo creativo. Volti, luoghi, oggetti, texture e frammenti visivi vengono selezionati e reinterpretati dall’intelligenza artificiale, mantenendo un’identità grafica coerente ma producendo ogni giorno una composizione differente.`,
  `ONOFF VISIONS si propone quindi come uno dei primi esperimenti editoriali di questo tipo: un sito concepito attraverso un imprinting umano e successivamente alimentato, aggiornato e controllato dall’intelligenza artificiale. Un sistema editoriale autonomo che unisce informazione, tecnologia, memoria fotografica e creatività generativa, senza rinunciare alla responsabilità della direzione umana.`,
  `Un progetto di ONOFFMAG diretto da Claudio Napoli, tra Roma e New York.`
 ]
});
const base=document.body.dataset.base||'.';
const COVER={
 'volto-sintetico-sembra-piu-vero':['cover-trust','FIDUCIA<br>SINTETICA'],
 'contenuti-sintetici-regole-trasparenza':['cover-origin','ORIGINE<br>VISIBILE'],
 'attrice-che-non-esiste':['cover-eye','ATTRICE<br>SINTETICA'],
 'oltre-il-prompt':['cover-prompt','OLTRE IL<br>PROMPT'],
 'riconoscere-video-ai':['cover-label','AI O<br>REALTÀ?'],
 'quando-ai-acquista-un-corpo':['cover-body','AI<br>FISICA'],
 'ai-puo-avere-intuizione':['cover-think','INTUIZIONE<br>ARTIFICIALE']
};
const PHOTO_COVERS={
 'voce-sintetica-consenso-diritti':{
  small:'images/covers/198-voce-autorizzata-onoff01-800.webp',
  large:'images/covers/198-voce-autorizzata-onoff01-1600.webp',
  phrase:'VOCE<br>AUTORIZZATA',
  alt:'Una figura parla verso forme modulari che trasformano la voce in un paesaggio sonoro turchese, rosso e crema'
 },
 'video-ai-diventa-infrastruttura':{
  small:'images/covers/197-media-programmabili-onoff01-800.webp',
  large:'images/covers/197-media-programmabili-onoff01-1600.webp',
  phrase:'MEDIA<br>PROGRAMMABILI',
  alt:'Una figura contemplativa è inserita in una sala di regia modulare turchese, rossa e crema'
 },
 'adobe-topaz-post-produzione-ai':{
  small:'images/covers/196-dettaglio-ritrovato-onoff01-800.webp',
  large:'images/covers/196-dettaglio-ritrovato-onoff01-1600.webp',
  phrase:'DETTAGLIO<br>RITROVATO',
  alt:'Una città verticale color crema attraversata da una scala rossa su fondo turchese'
 },
 'volto-sintetico-sembra-piu-vero':{
  small:'images/covers/195-fiducia-sintetica-onoff01-800.webp',
  large:'images/covers/195-fiducia-sintetica-onoff01-1600.webp',
  phrase:'FIDUCIA<br>SINTETICA',
  alt:'Una giovane donna con lo smartphone siede dentro una sequenza di portali geometrici'
 },
 'contenuti-sintetici-regole-trasparenza':{
  small:'images/covers/194-origine-visibile-onoff01-800.webp',
  large:'images/covers/194-origine-visibile-onoff01-1600.webp',
 phrase:'ORIGINE<br>VISIBILE',
  alt:'Una figura attraversa un archivio trasparente di fotogrammi, registri visivi e livelli di provenienza'
 },
 'ai-puo-avere-intuizione':{
  small:'images/covers/193-intuizione-artificiale-onoff01-800.webp',
  large:'images/covers/193-intuizione-artificiale-onoff01-1600.webp',
  phrase:'INTUIZIONE<br>ARTIFICIALE',
  alt:'Un pino cresce attraverso rampe curve e volumi geometrici rossi e crema'
 },
 'quando-ai-acquista-un-corpo':{
  small:'images/covers/192-corpi-possibili-onoff01-800.webp',
  large:'images/covers/192-corpi-possibili-onoff01-1600.webp',
  phrase:'CORPI<br>POSSIBILI',
  alt:'Una donna percorre una passerella rossa dentro un’architettura turchese e crema'
 },
 'riconoscere-video-ai':{
  small:'images/covers/191-ai-o-realta-onoff01-800.webp',
  large:'images/covers/191-ai-o-realta-onoff01-1600.webp',
  phrase:'AI O<br>REALTÀ?',
  alt:'Un uomo siede in uno spazio ferroviario duplicato tra geometrie turchesi e rosse'
 },
 'oltre-il-prompt':{
  small:'images/covers/190-oltre-il-prompt-onoff01-800.webp',
  large:'images/covers/190-oltre-il-prompt-onoff01-1600.webp',
  phrase:'OLTRE IL<br>PROMPT',
  alt:'Una rete di moduli architettonici forma un paesaggio astratto turchese, crema e rosso'
 },
 'attrice-che-non-esiste':{
  small:'images/covers/189-attrice-sintetica-onoff01-800.webp',
  large:'images/covers/189-attrice-sintetica-onoff01-1600.webp',
  phrase:'ATTRICE<br>SINTETICA',
  alt:'Una donna siede su un palcoscenico urbano sospeso tra balconi e geometrie turchesi'
 }
};
function isNew(a){const i=ARTICLES.indexOf(a);return i>=0&&i<2}
const TITLE_HIGHLIGHTS={
 'voce-sintetica-consenso-diritti':'voce',
 'video-ai-diventa-infrastruttura':'infrastruttura',
 'adobe-topaz-post-produzione-ai':'Topaz',
 'volto-sintetico-sembra-piu-vero':'sintetico',
 'contenuti-sintetici-regole-trasparenza':'regole',
 'ai-puo-avere-intuizione':'intuizione',
 'quando-ai-acquista-un-corpo':'corpo',
 'riconoscere-video-ai':'video',
 'oltre-il-prompt':'prompt',
 'attrice-che-non-esiste':'attrice',
 'perche-onoff-visions':'innovazione'
};
const BODY_HIGHLIGHTS={
 'voce-sintetica-consenso-diritti':['chi possa autorizzarla','consenso informato, chiaro e specifico','un’identità con diritti e responsabilità','continuità espressiva tra le lingue','catena dei diritti','registro delle generazioni','La trasparenza non rovina l’illusione','tecnologia, contratto e responsabilità'],
 'video-ai-diventa-infrastruttura':['infrastruttura programmabile','cambiare modello può richiedere una sola riga di codice','flussi personalizzati','struttura delle decisioni','ricette preconfigurate','presenza che reagisce allo spettatore','progettare il flusso'],
 'adobe-topaz-post-produzione-ai':['riduzione del rumore','recupero dei dettagli','acquisire Topaz Labs','elaborazione locale','dettaglio plausibile e dettaglio autentico','generazione e finishing','catena che collega ripresa, sintesi, montaggio, correzione e consegna'],
 'volto-sintetico-sembra-piu-vero':['elettroencefalografia','soltanto il 33 per cento','più familiari, attraenti e affidabili','fisionomie regolari e prototipiche','scelta psicologica','prova di autenticità','persuasione più silenziosa'],
 'contenuti-sintetici-regole-trasparenza':['2 agosto 2026','obblighi di trasparenza','formato leggibile dalla macchina','opere chiaramente artistiche, creative, satiriche o di finzione','sistema a strati','provenienza come un elemento del flusso produttivo','grammatica nuova dei crediti'],
 'ai-puo-avere-intuizione':['problema scientifico rimasto aperto per anni','enormi spazi di possibilità','capacità, comprensione e coscienza','verifica, interpreta e attribuisce significato','ci costringa a guardare in modo nuovo'],
 'quando-ai-acquista-un-corpo':['Physical AI','sensori, motori e macchine','corpo umano','usare le mani con precisione','intera filiera','fabbriche e magazzini','abbastanza affidabile da lavorare otto ore'],
 'riconoscere-video-ai':['indizi stanno scomparendo','occhio dello spettatore','etichette, dichiarazioni degli autori e sistemi automatici','parte dei crediti','standard condivisi','conservare la fiducia nel video'],
 'oltre-il-prompt':['singola inquadratura','vera sfida è la continuità','volto, costume e intenzione','dal prompt al workflow','controllo della camera','una scelta visiva produce significato'],
 'attrice-che-non-esiste':['non è mai nato','interpreti sintetici','una persona','modello, dataset, prompt, regia e post-produzione','Chi firma allora la performance?','dichiararne l’origine','trasparenza deve esistere nei crediti'],
 'perche-onoff-visions':['osservatorio editoriale','ricerca e dal confronto delle fonti','pubblicazione e ai controlli di qualità','impronta umana precisa','progressivamente autonomo','creato interamente attraverso ChatGPT Work','un nuovo contenuto quotidiano','365 articoli all’anno','366 negli anni bisestili','365 nuove immagini all’anno','fotografie originali di Claudio Napoli','materia viva per un nuovo processo creativo','uno dei primi esperimenti editoriali di questo tipo','informazione, tecnologia, memoria fotografica e creatività generativa']
};
function highlightedTitle(a){const word=TITLE_HIGHLIGHTS[a.slug];return word?a.title.replace(word,`<span class="title-highlight">${word}</span>`):a.title}
function addBodyHighlights(a,root){const phrases=BODY_HIGHLIGHTS[a.slug]||a.tags||[];root.querySelectorAll('.article-copy>p,.story-copy>p').forEach(p=>{let html=p.innerHTML;phrases.forEach(phrase=>{if(html.includes(phrase)&&!html.includes(`<strong>${phrase}</strong>`)){html=html.replace(phrase,`<strong>${phrase}</strong>`)}});p.innerHTML=html})}
function numberMark(n){const [current,total]=n.split('/');return `<span class="num-current">${current}</span><span class="num-total">${total}</span>`}
function fullDate(a){const s=new Intl.DateTimeFormat('it-IT',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Europe/Rome'}).format(new Date(`${a.iso}T12:00:00Z`));return s.charAt(0).toUpperCase()+s.slice(1)}
function displayTime(a){return a===PROJECT?a.time:'4 minuti'}
function articleBody(a){const additions=BODY_ADDITIONS[a.slug];return additions?[...a.body.slice(0,-1),...additions,a.body[a.body.length-1]]:a.body}
const ARTICLE_SUMMARIES={
 'voce-sintetica-consenso-diritti':'La voce sintetica è un’identità professionale, non un semplice file. Consenso specifico, sicurezza e tracciabilità devono accompagnarla dalla registrazione alla pubblicazione.',
 'video-ai-diventa-infrastruttura':'Il video AI passa da strumento isolato a infrastruttura creativa. La nuova competenza sarà progettare e controllare il flusso, non soltanto scrivere il prompt.',
 'adobe-topaz-post-produzione-ai':'La sfida del video AI si sposta dalla generazione alla qualità finale. Restauro e miglioramento richiedono controllo, perché un dettaglio plausibile non è sempre autentico.',
 'volto-sintetico-sembra-piu-vero':'I volti sintetici possono apparire più familiari e affidabili di quelli reali. Proprio questa naturalezza rende necessaria una nuova consapevolezza visiva.',
 'contenuti-sintetici-regole-trasparenza':'La trasparenza sui contenuti sintetici entra nel flusso produttivo. Dichiarare strumenti e interventi protegge lo spettatore e rende visibile il lavoro umano.',
 'ai-puo-avere-intuizione':'L’AI può trovare soluzioni inattese senza comprenderle come una persona. Il valore nasce quando la proposta della macchina viene verificata e interpretata dall’essere umano.',
 'quando-ai-acquista-un-corpo':'La Physical AI porta i modelli fuori dallo schermo e dentro macchine capaci di agire. Il passaggio decisivo non sarà spettacolare, ma affidabile e sicuro.',
 'riconoscere-video-ai':'Riconoscere un video sintetico non può dipendere soltanto dall’occhio. Servono provenienza digitale, dichiarazioni comprensibili e crediti più precisi.',
 'oltre-il-prompt':'Il cinema generativo comincia quando le immagini costruiscono continuità e significato. Il prompt è soltanto l’inizio di un flusso fatto di scelte e controllo.',
 'attrice-che-non-esiste':'Un interprete sintetico trasforma identità, recitazione e responsabilità. L’illusione può vivere sullo schermo, ma origine e diritti devono restare visibili.'
};
const SUMMARY_HIGHLIGHTS={
 'voce-sintetica-consenso-diritti':['identità professionale','Consenso specifico, sicurezza e tracciabilità'],
 'video-ai-diventa-infrastruttura':['infrastruttura creativa','progettare e controllare il flusso'],
 'adobe-topaz-post-produzione-ai':['qualità finale','un dettaglio plausibile non è sempre autentico'],
 'volto-sintetico-sembra-piu-vero':['più familiari e affidabili','consapevolezza visiva'],
 'contenuti-sintetici-regole-trasparenza':['trasparenza sui contenuti sintetici','lavoro umano'],
 'ai-puo-avere-intuizione':['soluzioni inattese','verificata e interpretata'],
 'quando-ai-acquista-un-corpo':['Physical AI','affidabile e sicuro'],
 'riconoscere-video-ai':['provenienza digitale','crediti più precisi'],
 'oltre-il-prompt':['continuità e significato','scelte e controllo'],
 'attrice-che-non-esiste':['identità, recitazione e responsabilità','origine e diritti']
};
function highlightedSummary(a,text){let html=text;(SUMMARY_HIGHLIGHTS[a.slug]||[]).forEach(phrase=>{html=html.replace(phrase,`<strong>${phrase}</strong>`)});return html}
function articleSections(a){const body=articleBody(a);const split=Math.min(3,Math.max(2,Math.ceil(body.length*.45)));return{essential:body.slice(0,split),deep:body.slice(split),summary:ARTICLE_SUMMARIES[a.slug]||a.deck}}
const RELATED_ARTICLES={
 'voce-sintetica-consenso-diritti':[
  ['attrice-che-non-esiste','Identità sintetiche, consenso e diritti degli interpreti si incontrano nello stesso nuovo territorio.'],
  ['contenuti-sintetici-regole-trasparenza','Le regole sulla trasparenza completano il tema della voce autorizzata e della provenienza dei contenuti.']
 ],
 'video-ai-diventa-infrastruttura':[
  ['oltre-il-prompt','Dal singolo prompt a un vero processo produttivo: il passaggio che rende il video programmabile.'],
  ['adobe-topaz-post-produzione-ai','Quando il video AI entra nel workflow, qualità e post-produzione diventano parte della stessa infrastruttura.']
 ],
 'adobe-topaz-post-produzione-ai':[
  ['video-ai-diventa-infrastruttura','La qualità finale acquista senso dentro un sistema capace di generare e trasformare media su scala.'],
  ['oltre-il-prompt','Il lavoro creativo continua dopo la generazione: controllo, selezione e rifinitura restano decisivi.']
 ],
 'volto-sintetico-sembra-piu-vero':[
  ['attrice-che-non-esiste','Un volto credibile apre domande concrete su identità, interpretazione e responsabilità.'],
  ['riconoscere-video-ai','Se il sintetico appare naturale, riconoscerne la provenienza diventa ancora più importante.']
 ],
 'contenuti-sintetici-regole-trasparenza':[
  ['riconoscere-video-ai','Trasparenza e riconoscibilità sono due parti della stessa alfabetizzazione visiva.'],
  ['voce-sintetica-consenso-diritti','Le stesse regole di provenienza riguardano anche voci, identità e autorizzazioni.']
 ],
 'ai-puo-avere-intuizione':[
  ['quando-ai-acquista-un-corpo','Dall’intuizione simulata all’azione nel mondo fisico: il salto richiede verifica e responsabilità.'],
  ['video-ai-diventa-infrastruttura','Quando il modello entra nei processi, l’idea inattesa deve diventare un risultato controllabile.']
 ],
 'quando-ai-acquista-un-corpo':[
  ['ai-puo-avere-intuizione','La capacità di agire rende ancora più urgente capire che cosa chiamiamo intuizione della macchina.'],
  ['video-ai-diventa-infrastruttura','Robotica e media programmabili condividono la trasformazione dell’AI in infrastruttura operativa.']
 ],
 'riconoscere-video-ai':[
  ['contenuti-sintetici-regole-trasparenza','Agli indizi visivi devono affiancarsi informazioni chiare sull’origine dei contenuti.'],
  ['volto-sintetico-sembra-piu-vero','La naturalezza dei volti artificiali mostra perché il solo occhio non è più sufficiente.']
 ],
 'oltre-il-prompt':[
  ['video-ai-diventa-infrastruttura','Il linguaggio del prompt diventa davvero produttivo quando entra in sistemi e workflow ripetibili.'],
  ['adobe-topaz-post-produzione-ai','La generazione è soltanto l’inizio: la qualità nasce anche dal lavoro che viene dopo.']
 ],
 'attrice-che-non-esiste':[
  ['voce-sintetica-consenso-diritti','Volto e voce sintetici pongono la stessa domanda: chi autorizza l’uso di una identità?'],
  ['volto-sintetico-sembra-piu-vero','La credibilità percettiva spiega perché un interprete artificiale può sembrarci sorprendentemente reale.']
 ]
};
function relatedArticles(a){
 const manual=(RELATED_ARTICLES[a.slug]||[]).map(([slug,reason])=>({article:ARTICLES.find(item=>item.slug===slug),reason})).filter(item=>item.article);
 if(manual.length>=2)return manual.slice(0,2);
 const used=new Set([a.slug,...manual.map(item=>item.article.slug)]);
 const fallback=ARTICLES.filter(item=>!used.has(item.slug)).map(item=>({article:item,score:item.tags.filter(tag=>a.tags.includes(tag)).length})).filter(item=>item.score>0).sort((x,y)=>y.score-x.score).map(item=>({article:item.article,reason:'Un altro punto di vista per continuare a esplorare questo cambiamento.'}));
 return [...manual,...fallback].slice(0,2);
}
function relatedReading(a){
 const items=relatedArticles(a);if(!items.length)return'';
 return `<section class="related-reading"><header><div><small>Percorso interno</small><h2>Continua la lettura</h2></div><p>Due articoli collegati per approfondire il tema da prospettive diverse.</p></header><div class="related-reading-grid">${items.map(({article:item,reason})=>{const photo=PHOTO_COVERS[item.slug];const visual=photo?`<img src="${base}/${photo.small}" alt="${photo.alt}" loading="lazy" decoding="async">`:`<span class="related-placeholder">${(COVER[item.slug]||['','ONOFF VISIONS'])[1]}</span>`;return `<a class="related-card" href="${base}/articoli/${item.slug}.html"><span class="related-visual">${visual}</span><span class="related-content"><span class="related-number">${numberMark(item.n)}</span><strong>${highlightedTitle(item)}</strong><small>${reason}</small><i aria-hidden="true">↗</i></span></a>`}).join('')}</div></section>`;
}
function coverLike(a){return `<button class="cover-heart" type="button" data-cover-like="${a.slug}" aria-label="Aggiungi ${a.title} alle copertine preferite" aria-pressed="false">♡</button>`}
function card(a){const c=COVER[a.slug]||['cover-prompt','ONOFF<br>VISIONS'];const photo=PHOTO_COVERS[a.slug];const cover=photo?`<div class="thumb photo-thumb"><img src="${base}/${photo.small}" alt="${photo.alt}" loading="lazy" decoding="async">${coverLike(a)}<span class="cover-word">${photo.phrase}</span></div>`:`<div class="thumb ${c[0]}">${coverLike(a)}<span class="cover-word">${c[1]}</span></div>`;return `<a class="card" href="${base}/articoli/${a.slug}.html"><div><div class="meta"><time datetime="${a.iso}">${fullDate(a)}</time>${isNew(a)?'<span class="new">NEW</span>':''}</div>${cover}</div><div><div class="meta"><span class="card-number">${numberMark(a.n)}</span><span>${displayTime(a)}</span></div><h3>${highlightedTitle(a)}</h3><p>${a.deck}</p><div class="arrow">↗</div></div></a>`}
const cards=document.querySelector('[data-cards]');if(cards)cards.innerHTML=ARTICLES.slice(0,12).map(card).join('');
const flashNews=document.querySelector('[data-flash-news]');if(flashNews){const flashes=FLASH_ITEMS.map(item=>`${item} ✦`).join(' ');flashNews.innerHTML=`<span>${flashes}</span><span aria-hidden="true">${flashes}</span>`}
const worldCounter=document.querySelector('[data-world-counter]');if(worldCounter){const basePopulation=8300678396;const baseDate=Date.UTC(2026,6,1,12,0,0);const peoplePerSecond=1.43;const formatPopulation=new Intl.NumberFormat('it-IT');const updatePopulation=()=>{const estimate=Math.round(basePopulation+((Date.now()-baseDate)/1000)*peoplePerSecond);worldCounter.textContent=formatPopulation.format(estimate)};updatePopulation();setInterval(updatePopulation,1000)}
const archive=document.querySelector('[data-archive]');if(archive){archive.innerHTML=ARTICLES.map(a=>`<a class="archive-row" href="${base}/articoli/${a.slug}.html"><time class="date" datetime="${a.iso}">${fullDate(a)}</time><h2>${highlightedTitle(a)}</h2><span class="archive-number">${numberMark(a.n)}</span><span class="archive-arrow" aria-hidden="true"></span></a>`).join('');const archiveTitle=document.querySelector('.page-title h1');if(archiveTitle){archiveTitle.classList.add('archive-title');archiveTitle.innerHTML='Archi<span>v</span>io'}}
const covers=ARTICLES.filter(a=>PHOTO_COVERS[a.slug]);document.querySelectorAll('[data-cover-count]').forEach(item=>item.textContent=String(covers.length).padStart(2,'0'));
const coverGrid=document.querySelector('[data-cover-grid]');if(coverGrid){coverGrid.innerHTML=covers.map(a=>{const photo=PHOTO_COVERS[a.slug];return `<a class="cover-tile" href="${base}/articoli/${a.slug}.html" aria-label="${a.n}: ${a.title}"><img src="${base}/${photo.small}" alt="${photo.alt}" loading="lazy" decoding="async">${coverLike(a)}<span><strong>${highlightedTitle(a)}</strong></span></a>`}).join('');document.querySelectorAll('[data-cover-mode]').forEach(button=>button.addEventListener('click',()=>{const showTitles=button.dataset.coverMode==='titles';coverGrid.classList.toggle('show-titles',showTitles);document.querySelectorAll('[data-cover-mode]').forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))})}))}
function setupCoverLikes(){
 let liked=[];try{liked=JSON.parse(localStorage.getItem('onoff-liked-covers')||'[]')}catch(error){liked=[]}
 const saved=new Set(Array.isArray(liked)?liked:[]);
 document.querySelectorAll('[data-cover-like]').forEach(button=>{
  const slug=button.dataset.coverLike;
  const render=()=>{const active=saved.has(slug);button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active));button.textContent=active?'♥':'♡'};
  render();
  button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();saved.has(slug)?saved.delete(slug):saved.add(slug);try{localStorage.setItem('onoff-liked-covers',JSON.stringify([...saved]))}catch(error){}render()});
 });
}
setupCoverLikes();
let activeSpeech=null;function listenArticle(a,button){if(!('speechSynthesis'in window))return;if(activeSpeech){speechSynthesis.cancel();activeSpeech=null;button.classList.remove('is-playing');button.setAttribute('aria-pressed','false');button.querySelector('[data-listen-label]').textContent='Ascolta l’articolo';return}const text=[a.title,a.deck,...articleBody(a)].join('. ');const utterance=new SpeechSynthesisUtterance(text);const voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('it'))||null;if(voice)utterance.voice=voice;utterance.lang='it-IT';utterance.rate=.96;utterance.onend=utterance.onerror=()=>{activeSpeech=null;button.classList.remove('is-playing');button.setAttribute('aria-pressed','false');button.querySelector('[data-listen-label]').textContent='Ascolta l’articolo'};activeSpeech=utterance;button.classList.add('is-playing');button.setAttribute('aria-pressed','true');button.querySelector('[data-listen-label]').textContent='Ferma ascolto';speechSynthesis.cancel();speechSynthesis.speak(utterance)}
const article=document.querySelector('[data-article]');
if(article){
 const a=[PROJECT,...ARTICLES].find(x=>x.slug===article.dataset.article);
 if(a){
  document.title=`${a.title} — ONOFF VISIONS`;
  document.querySelector('meta[name=description]').content=a.deck;
  const sourceList=a.sources||SOURCES[a.slug]||[];
  const photo=PHOTO_COVERS[a.slug];
  const photoFeature=photo?`<figure class="article-cover-photo"><picture><source media="(max-width:800px)" srcset="${base}/${photo.small}"><img src="${base}/${photo.large}" alt="${photo.alt}" decoding="async"></picture><figcaption><strong>${photo.phrase}</strong><small>Immagine elaborata dall’archivio fotografico di Claudio Napoli</small></figcaption></figure>`:'';
  const hero=`<section class="article-hero"><div class="article-number">${numberMark(a.n)}</div><div class="article-intro"><div class="article-date"><span class="mobile-article-progress">${numberMark(a.n)}</span><time datetime="${a.iso}">${fullDate(a)}</time><span class="mobile-reading-time">${displayTime(a)}</span>${isNew(a)?'<span class="new">NEW</span>':''}</div><h1>${a.title}</h1><p class="deck">${a.deck}</p><div class="meta article-details"><span>${numberMark(a.n)}</span><time datetime="${a.iso}">${fullDate(a)}</time><span>${displayTime(a)}</span></div><button class="listen-button" type="button" data-listen aria-pressed="false"><span class="listen-symbol">▶</span><span data-listen-label>Ascolta l’articolo</span></button></div></section>`;
  if(a===PROJECT){
   article.innerHTML=`${hero}${photoFeature}<section class="article-layout"><aside class="article-side"><div class="eyebrow">ONOFF VISIONS<br>Roma / New York</div></aside><div class="article-copy">${articleBody(a).map(p=>`<p>${p}</p>`).join('')}<div class="highlights"><span class="eyebrow" style="width:100%">Parole chiave</span>${a.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div><a class="archive-link" style="margin-top:45px" href="../index.html"><span>← Torna alla homepage</span></a></div></section>`;
  }else{
   const sections=articleSections(a);
   const sources=sourceList.map(([label,url],i)=>`<a class="story-source" href="${url}" target="_blank" rel="noopener noreferrer"><span><small>Fonte ${String(i+1).padStart(2,'0')}</small><strong>${label}</strong></span><i>↗</i></a>`).join('');
   article.innerHTML=`${hero}${photoFeature}<div class="story-wrap"><section class="story-block story-essential"><aside><b>01</b><span>L’essenziale</span></aside><div class="story-copy">${sections.essential.map(p=>`<p>${p}</p>`).join('')}</div></section><section class="story-block story-deep"><aside><b>02</b><span>L’approfondimento</span></aside><div class="story-copy">${sections.deep.map(p=>`<p>${p}</p>`).join('')}</div></section><section class="story-block story-summary"><aside><b>03</b><span>In due righe</span></aside><div class="story-copy"><p>${highlightedSummary(a,sections.summary)}</p><div class="highlights"><span class="eyebrow" style="width:100%">Parole chiave</span>${a.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div></div></section>${relatedReading(a)}<section class="story-block story-sources"><aside><b>04</b><span>Per approfondire</span></aside><div class="story-source-list">${sources}</div></section><a class="archive-link story-home" href="../index.html"><span>← Torna alla homepage</span></a></div>`;
  }
  const listenButton=article.querySelector('[data-listen]');if(listenButton)listenButton.addEventListener('click',()=>listenArticle(a,listenButton));
 }
}
const renderedArticleTitle=document.querySelector('[data-article] .article-intro h1');
if(renderedArticleTitle){const currentArticle=[PROJECT,...ARTICLES].find(x=>x.slug===document.querySelector('[data-article]').dataset.article);if(currentArticle)renderedArticleTitle.innerHTML=highlightedTitle(currentArticle)}
const renderedArticle=document.querySelector('[data-article]');if(renderedArticle){const currentArticle=[PROJECT,...ARTICLES].find(x=>x.slug===renderedArticle.dataset.article);if(currentArticle)addBodyHighlights(currentArticle,renderedArticle)}
function toggleMenu(){document.querySelector('nav').classList.toggle('open')}
const yearCounter=document.querySelector('[data-year-counter]');
if(yearCounter){
 const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!reduceMotion){
  const currentEl=yearCounter.querySelector('[data-year-current]');
  const targetDay=Math.max(0,parseInt(ARTICLES[0]?.n,10)||0);
  let running=false;
  let repeatTimer;
  let audioContext;
  let flapNoise;
  const unlockSound=()=>{
   if(audioContext)return;
   const AudioEngine=window.AudioContext||window.webkitAudioContext;
   if(AudioEngine){
    audioContext=new AudioEngine();
    flapNoise=audioContext.createBuffer(1,Math.floor(audioContext.sampleRate*.024),audioContext.sampleRate);
    const noise=flapNoise.getChannelData(0);
    for(let i=0;i<noise.length;i++)noise[i]=(Math.random()*2-1)*(1-i/noise.length);
    audioContext.resume();
   }
  };
  const flapTick=(progress,closing=false)=>{
   if(!audioContext||audioContext.state!=='running')return;
   const now=audioContext.currentTime;
   const noise=audioContext.createBufferSource();
   const filter=audioContext.createBiquadFilter();
   const noiseVolume=audioContext.createGain();
   noise.buffer=flapNoise;
   filter.type='bandpass';
   filter.frequency.setValueAtTime(1250+Math.random()*420,now);
   filter.Q.setValueAtTime(.7,now);
   noiseVolume.gain.setValueAtTime(closing?.09:.048,now);
   noiseVolume.gain.exponentialRampToValueAtTime(.0001,now+.024);
   noise.connect(filter).connect(noiseVolume).connect(audioContext.destination);
   const oscillator=audioContext.createOscillator();
   const volume=audioContext.createGain();
   oscillator.type='triangle';
   oscillator.frequency.setValueAtTime((closing?105:135)+Math.random()*28-progress*16,now);
   volume.gain.setValueAtTime(closing?.07:.035,now);
   volume.gain.exponentialRampToValueAtTime(.0001,now+.03);
   oscillator.connect(volume).connect(audioContext.destination);
   noise.start(now);
   oscillator.start(now);
   oscillator.stop(now+.032);
  };
  document.addEventListener('pointerdown',unlockSound,{once:true,passive:true});
  document.addEventListener('keydown',unlockSound,{once:true});
  const startCounter=()=>{
   if(running)return;
   if(document.hidden){repeatTimer=setTimeout(startCounter,1000);return}
   running=true;
   yearCounter.classList.add('is-counting');
   currentEl.textContent='000';
   const start=performance.now(),duration=1150;
   let lastTick=-Infinity;
   const run=now=>{
    const progress=Math.min((now-start)/duration,1);
    const value=Math.min(targetDay,Math.max(0,Math.floor(progress*targetDay)));
    currentEl.textContent=String(value).padStart(3,'0');
    if(now-lastTick>48){flapTick(progress);lastTick=now}
    if(progress<1){requestAnimationFrame(run)}else{
     currentEl.textContent=String(targetDay).padStart(3,'0');
     flapTick(1,true);
     yearCounter.classList.remove('is-counting');
     running=false;
     repeatTimer=setTimeout(startCounter,10000);
    }
   };
   requestAnimationFrame(run);
  };
  const begin=()=>{
   startCounter();
  };
  if('IntersectionObserver'in window){
   const observer=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){
     observer.disconnect();
     begin();
    }
   },{threshold:.35});
   observer.observe(yearCounter);
  }else{begin()}
 }
}
