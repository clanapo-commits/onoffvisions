import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root=path.resolve(path.dirname(new URL(import.meta.url).pathname),'..');
const source=fs.readFileSync(path.join(root,'app.js'),'utf8');
const origin='https://onoffvisions.pages.dev';

function literalBetween(start,end){
 const a=source.indexOf(start);
 const b=source.indexOf(end,a);
 if(a<0||b<0)throw new Error(`Blocco non trovato: ${start}`);
 return source.slice(a+start.length,b).trim().replace(/;$/,'');
}
const articles=vm.runInNewContext(`(${literalBetween('const ARTICLES=','const FLASH_ITEMS=')})`);
const covers=vm.runInNewContext(`(${literalBetween('const PHOTO_COVERS=','function isNew')})`);
const project={
 slug:'perche-onoff-visions',title:'L’innovazione, raccontata mentre accade.',iso:'2026-07-12',
 deck:'ONOFF VISIONS è un esperimento editoriale creato attraverso ChatGPT Work: un sistema progettato per ricercare, scrivere, creare immagini e pubblicare un articolo ogni giorno.',
 tags:['ChatGPT Work','Automazione editoriale','Creatività generativa','Archivio fotografico','Controllo umano','365 articoli']
};

const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const json=s=>JSON.stringify(s).replace(/</g,'\\u003c');
function seoHead(a){
 const url=`${origin}/articoli/${a.slug}.html`;
 const cover=covers[a.slug];
 const image=cover?`${origin}/${cover.large}`:`${origin}/icon-512.png`;
 const data={
  '@context':'https://schema.org','@type':'Article',headline:a.title,description:a.deck,
  datePublished:a.iso,dateModified:a.iso,inLanguage:'it-IT',mainEntityOfPage:{'@type':'WebPage','@id':url},
  image:[image],author:{'@type':'Person',name:'Claudio Napoli'},
  publisher:{'@type':'Organization',name:'ONOFFMAG',url:'https://onoffmag.com'},
  keywords:(a.tags||[]).join(', ')
 };
 return `  <title>${esc(a.title)} — ONOFF VISIONS</title>
  <meta name="description" content="${esc(a.deck)}">
  <meta name="author" content="Claudio Napoli">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${url}">
  <meta property="og:locale" content="it_IT">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="ONOFF VISIONS">
  <meta property="og:title" content="${esc(a.title)}">
  <meta property="og:description" content="${esc(a.deck)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:alt" content="${esc(cover?.alt||a.title)}">
  <meta property="article:published_time" content="${a.iso}">
  <meta property="article:author" content="Claudio Napoli">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(a.title)}">
  <meta name="twitter:description" content="${esc(a.deck)}">
  <meta name="twitter:image" content="${image}">
  <script type="application/ld+json">${json(data)}</script>`;
}

for(const a of [project,...articles]){
 const file=path.join(root,'articoli',`${a.slug}.html`);
 let html=fs.readFileSync(file,'utf8');
 const start=html.indexOf('<title>');
 const end=html.indexOf('<link rel="stylesheet"',start);
 if(start<0||end<0)throw new Error(`Head non riconosciuto: ${file}`);
 html=html.slice(0,start)+seoHead(a)+'\n'+html.slice(end);
 fs.writeFileSync(file,html);
}

const pages=[
 ['','2026-07-17','daily','1.0'],['archivio.html','2026-07-17','daily','0.9'],
 ['copertine.html','2026-07-17','daily','0.8'],['about.html','2026-07-17','monthly','0.7'],
 ...[project,...articles].map(a=>[`articoli/${a.slug}.html`,a.iso,'monthly','0.8'])
];
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(([u,d,f,p])=>`  <url><loc>${origin}/${u}</loc><lastmod>${d}</lastmod><changefreq>${f}</changefreq><priority>${p}</priority></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
fs.writeFileSync(path.join(root,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`SEO aggiornato per ${articles.length+1} articoli.`);
