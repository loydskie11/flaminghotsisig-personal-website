import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, ExternalLink, Image as ImageIcon, Menu, X, Volume2, VolumeX, Folder, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

// --- CUSTOM BRAND ICONS ---
const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0 .1-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.2 5 1.6 5 1.6a5.5 5.5 0 0 0 .1 3.8A5.5 5.5 0 0 0 3 9.5c0 4.9 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

// Graphic Design Categories & Data
const graphicCategories = [
  { id: 'motion', label: 'Motion Graphics', tab: 'MOTION', color: '#A259FF' },
  { id: 'socmed', label: 'Social Media', tab: 'SOCMED', color: '#FF3D00' },
  { id: 'personal', label: 'Personal Art', tab: 'PERSONAL', color: '#31A8FF' },
  { id: 'apparel', label: 'Apparel', tab: 'MERCH', color: '#3ECF8E' },
  { id: 'others', label: 'Others', tab: 'MISC', color: '#FF9A00' }
];

const graphicData = {
  socmed: [
    { 
      title: 'Valentines Day 24 Poster', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779929774/ngl_yduguz.jpg'
    },
    { 
      title: 'Hackathon 24', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779929780/hackathon_drtkcl.jpg'
    },
    { 
      title: 'Typing Master 24', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779929792/typing_master_r45cf6.png'
    },
    { 
      title: 'Graphic Design 24', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779929841/graphic_hhdmgy.png'
    },
    { 
      title: 'MLBB Tournament 24', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779929785/mlbb_rftakx.jpg'
    },
    { 
      title: 'Argao Youth Convergence 25', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1780426128/597827139_1271968068299263_7971622326673768095_n_rhlbfu.jpg'
    },
    { 
      title: 'BAIoTs 24', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779929836/baiots_i5qfxd.png'
    },
    { 
      title: 'Swapped Finals 26', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779930735/swapped_egji4t.png'
    },
    { 
      title: 'Women Empowerment 26', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779931649/women-emp_auzrkb.jpg'
    },
    { 
      title: 'Local Summit Teaser', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779931650/ikigai-teaser_pdm2s9.jpg'
    },
    { 
      title: 'Local Summit Speaker', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779931649/ikigai-speaker_nukcyb.jpg'
    },
    { 
      title: 'Hagit Syagit 25', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1780426371/hagit_d3pj3c.jpg'
    },
    { 
      title: 'Clinical Uniform 26-27', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781256309/f_byzzks.png'
    },
    { 
      title: 'New Year 2026', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1784363698/final_ttvbyw.png'
    },
  ],
  /* logos: [
    { 
      title: 'Argao SK Federation Logo', 
      span: 'col-span-1 md:col-span-3 aspect-[1/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779932437/skf_olpa00.jpg'
    },
  ], */
  apparel: [
    { 
      title: 'CTUAC Animal Science Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/f_auto,q_auto/v1779766109/sample4_e96uiv.jpg'
    },
    { 
      title: 'CTUAC FSS Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779774738/fss-25-26_wcpbtd.png'
    },
    { 
      title: 'CTUAC SSG v2 Uniform 26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/f_auto,q_auto/v1779767438/draft5_fyemh2.png'
    },
    { 
      title: 'CTUAC Chorale Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/f_auto,q_auto/v1779771948/chorale_yze0gn.png'
    },
    { 
      title: 'CTUAC BSIT OJT Uniform 26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/f_auto,q_auto/v1779773687/bsit-ojt-26_wfh9kp.png'
    },
    { 
      title: 'CTUAC FSTLP Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779773750/fstlp-25_tmw736.png'
    },
    { 
      title: 'CTUAC Horticulture Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779774384/shirt_sample_2.1_kxi9zt.png'
    },
    { 
      title: 'CTU FSG Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779774598/fsg-25-26_h9nbsa.png'
    },
    { 
      title: 'CTUAC SSG Draft Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779775097/ssg-d1_zosd4d.png'
    },
    { 
      title: 'CTUAC SSG Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779775082/ssg-v1-25-26_z0udbf.png'
    },
    { 
      title: 'CTUAC BIT Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779784937/bit-25-26_wdcuwj.png'
    },
    { 
      title: 'CTUAC BSIT Draft Uniform 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779892869/bsit-draft-25-26_ar6iwg.png'
    },
    { 
      title: 'CTUAC Psych Clinical Uniform 26-27', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1780426465/draft1_awnxes.png'
    },
    { 
      title: 'Canduran Hilltops Jersey', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779898344/hilltops_a7f01k.png'
    },
    { 
      title: 'CTUAC Tech Optimizers Jersey 25', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779899249/tech-opt_btgomh.png'
    },
    { 
      title: 'CTUAC University T-shirt 25-26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779902950/merch-d1_gspc73.jpg'
    },
    { 
      title: 'CTUAC IKIGAI T-shirt 26', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779904709/summit-shirt_dmdcol.jpg'
    },
    { 
      title: 'Sova Clothing Under Ctrl', 
      span: 'col-span-1 aspect-[0.75/0.50]', 
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1784363505/under_ctrl1_aodulc.jpg'
    },
  ],
  motion: [
    { 
      title: 'aespa Karina, boyfriend', 
      span: 'col-span-1 aspect-[1/1]', 
      video: 'https://res.cloudinary.com/dtnfvmzrd/video/upload/v1779801721/karina-boyfriend_vhzhto.mp4',
      hasAudio: true 
    },
    { 
      title: 'Rex County, The Shade', 
      span: 'col-span-1 md:col-span-2 aspect-[2/1]', 
      video: 'https://res.cloudinary.com/dtnfvmzrd/video/upload/v1779801854/rexcounty_bi9kbz.mp4',
      hasAudio: true
    },
    { 
      title: 'aespa Karina, Kasih Aba Aba', 
      span: 'col-span-1 md:col-span-2 aspect-[2/1]', 
      video: 'https://res.cloudinary.com/dtnfvmzrd/video/upload/q_auto/f_auto/v1779803505/kaurasakan_gp7gv5.mp4',
      hasAudio: true
    },
    { 
      title: 'CTUAC SSG Logo Animation', 
      span: 'col-span-1 aspect-[1/1]', 
      video: 'https://res.cloudinary.com/dtnfvmzrd/video/upload/q_auto/f_auto/v1779803654/ssg_voek5j.mp4'
    },
    {
      title: 'Argao Youth Convergence 25 Standby', 
      span: 'col-span-1 md:col-span-3 aspect-[2/1]', 
      video: 'https://res.cloudinary.com/dtnfvmzrd/video/upload/q_auto/f_auto/v1779803934/convergence_gz3b11.mp4'
    },
    {
      title: 'CTUAC Local Summit IKIGAI 26 Standby', 
      span: 'col-span-1 md:col-span-2 aspect-[2/1]', 
      video: 'https://res.cloudinary.com/dtnfvmzrd/video/upload/q_auto/f_auto/v1779930423/IKIGAI-STANDBY3_q097e0.mp4'
    },
    {
      title: 'Gerbera Daisies Motion', 
      span: 'col-span-1 aspect-[0.25/0.35]', 
      video: 'https://res.cloudinary.com/dtnfvmzrd/video/upload/q_auto/f_auto/v1781257785/gerbera_rbzp5p.mp4'
    },
  ],
  personal: [
    { 
      title: 'The Thinker', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779791678/thinker_vd0ftq.png'
    },
    { 
      title: 'Wings', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779791682/wings_rcjsib.png'
    },
    { 
      title: 'Carlos Sainz Jr.', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779791733/sainz_z6mijx.png'
    },
    { 
      title: 'aespa Winter', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779791747/winterae_prmyl7.png'
    },
    { 
      title: 'aespa Karina', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792111/karinaae_lkiw2m.png'
    },
    { 
      title: 'F40 Ferrari', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792059/ef40_s1iyt4.png'
    },
    { 
      title: 'Just Do Air', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792059/jordan_bns6iu.png'
    },
    { 
      title: 'Daniel Caesar, Freudian', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792082/daniel_bdzfg4.png'
    },
    { 
      title: 'Helcurt, Flow', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792081/hcflow_blzdwz.png'
    },
    { 
      title: 'CMIYGL', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792066/cmiygl_pwbjrl.png'
    },
    { 
      title: 'Prince of Monaco', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781256971/leclerc_hbfcvx.jpg'
    },
    { 
      title: 'All The Stars', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792071/panther_ioxwkx.jpg'
    },
    { 
      title: 'Orange Chinese Poster', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779793358/orangeChinesePoster2_ubotgh.jpg'
    },
    { 
      title: 'Mental Health Poster', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779793310/2_zuld5f.png'
    },
    { 
      title: 'Karina Personal Project', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779793305/1_etbuc6.png'
    },
    { 
      title: 'Isang Anghel', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779792045/anghel_qjq1fj.jpg'
    },
    { 
      title: 'Im Gonna Grow Wings', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779793262/2_emouf0.jpg'
    },
    { 
      title: 'Lost in Starlight', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779793455/3_acovd5.jpg'
    },
    { 
      title: 'Yu Jimin', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781257535/karina1_gsj8to.jpg'
    },
    { 
      title: 'Yu Jimin Print', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781257535/karina2_obyywz.jpg'
    },
    { 
      title: '3 Gerbera Daisies', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781257784/gerbera_hti4xf.jpg'
    },
    { 
      title: 'Font Showcase: Georgia', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258170/georgia1_ncecke.jpg'
    },
    { 
      title: 'Font Showcase: Georgia 2', 
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258170/georgia2_n1nx1x.jpg'
    },
    { 
      title: 'Dirty Work Karina',
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258297/dw-karina_iyeeml.jpg'
    },
    { 
      title: 'IVE Rei',
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258440/rei_chrvd6.jpg'
    },
    { 
      title: 'Mad Max, Simply Lovely',
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258571/madmax_bwdwba.jpg'
    },
    { 
      title: 'Mandarin Red Miata',
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258668/redcar_ht1zfl.jpg'
    },
    { 
      title: 'Karina Huracan',
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258769/huracan_ordj3l.jpg'
    },
    { 
      title: 'Sa Dulo Ng Taon',
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258861/sdnt_qth3xc.jpg'
    },
    { 
      title: 'Cylindrical Fish box',
      span: 'col-span-1 aspect-[0.25/0.30]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1781258956/fishbox_xdppws.jpg'
    },
    { 
      title: 'Carlos Sainz Williams', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1784363451/edit1_gh4su2.png'
    },
  ],
  others: [
    { 
      title: 'CTUAC SSG Medal 26', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779902639/medal-ssg_ozk7bi.png'
    },
    { 
      title: 'CTUAC Draft Lanyard', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779903616/BSIT2_jreolz.jpg'
    },
    { 
      title: 'CTUAC 81-Derful Dash Stickers', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779904220/dash-stickers_nywsni.jpg'
    },
    { 
      title: 'Graduation Tarpaulin 1', 
      span: 'col-span-1 md:col-span-3 aspect-[3/2]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779903298/grad-tarp1_trhlfn.jpg'
    },
    { 
      title: 'CTUAC IKIGAI Lanyard', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779904718/summit-lanyard_d01z9a.jpg'
    },
    { 
      title: 'CTUAC IKIGAI Pin', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779904719/summit-pin_uxu08v.jpg'
    },
    { 
      title: 'CTUAC IKIGAI Profile Frame', 
      span: 'col-span-1 aspect-[0.25/0.25]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779904722/summit-frame_r7yt6g.jpg'
    },
    { 
      title: 'CTUAC IKIGAI Stickers', 
      span: 'col-span-1 md:col-span-3 aspect-[1/0.50]',
      image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779904719/summit-stickers_se9mks.jpg'
    },
  ]
};

const projectData = [
  { 
    id: 1,
    title: 'RAG-Powered Institutional Knowledge System', 
    stack: 'FastAPI, Supabase, React',
    desc: 'An AI-driven platform built for quality assurance and academic governance.',
    image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1779804765/Screenshot_2026-05-13_225639_cqmgpd.png',
    link: 'https://github.com/durf-nvn/rag-governance'
  },
  { 
    title: 'Things I Wanted To Say', 
    stack: 'HTML, CSS, JavaScript', 
    desc: 'A static website designed as a personal space for expressions, reflections, or message storage.',
    image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/q_auto/f_auto/v1779899783/a25de2da-9bdf-432e-b08b-45252ced422c.png', 
    link: 'https://github.com/loydskie11/Things-I-Wanted-To-Say'
  },
  { 
    title: 'Back on Track', 
    stack: 'PWA, JavaScript, Supabase', 
    desc: 'For tracking required hours, logging daily tasks, or monitoring attendance, it keeps your data organized and seamlessly accessible across any device.',
    image: 'https://res.cloudinary.com/dtnfvmzrd/image/upload/v1782134495/bot-landscape_bxa7ji.png', 
    link: 'https://github.com/loydskie11/Back-on-Track'
  },
  { 
    title: 'Peened', 
    stack: 'Chrome Extension (Manifest V3), JavaScript', 
    desc: 'A frictionless Chrome extension to collect images, text snippets, and creative inspiration into your personal swipe file without losing context.',
    image: '/peened-preview.jpg', 
    link: 'https://github.com/loydskie11/peened-chrome-extension'
  }
];

// Skills / Software Proficiency — years of hands-on use + a tier label reads as more credible than a bare percentage
const skillGroups = [
  {
    label: 'Design & Motion',
    note: 'Visual craft',
    skills: [
      { name: 'Canva', years: 5, tier: 'Expert', color: '#00C4CC' },
      { name: 'Alight Motion', years: 5, tier: 'Expert', color: '#4CD5A8' },
      { name: 'Photoshop', years: 5, tier: 'Expert', color: '#31A8FF' },
      { name: 'CapCut Pro', years: 4, tier: 'Advanced', color: '#00F2C3' },
      { name: 'Figma', years: 3, tier: 'Advanced', color: '#A259FF' },
      { name: 'Lightroom', years: 2, tier: 'Proficient', color: '#00C8FF' },
      { name: 'Illustrator', years: 1, tier: 'Proficient', color: '#FF9A00' },
      { name: 'Premiere Pro', years: 1, tier: 'Proficient', color: '#EA77FF' },
    ]
  },
  {
    label: 'Development',
    note: 'Systems & code',
    skills: [
      { name: 'HTML / CSS / JS', years: 3, tier: 'Advanced', color: '#F0743C' },
      { name: 'React + Vite', years: 2, tier: 'Advanced', color: '#61DAFB' },
      { name: 'Supabase', years: 2, tier: 'Proficient', color: '#3ECF8E' },
      { name: 'React + TypeScript', years: 1, tier: 'Proficient', color: '#3178C6' },
      { name: 'FastAPI (Python)', years: 1, tier: 'Proficient', color: '#009485' },
      { name: 'AI / RAG Systems', years: 1, tier: 'Proficient', color: '#FF3D00' },
    ]
  }
];
const SKILL_MAX_YEARS = 5;

// Hero showcase — rotates through a few of the strongest Social Media pieces
const heroShowcase = [
  { title: graphicData.socmed[3].title, image: graphicData.socmed[3].image, tilt: -3 },   // Graphic Design 24
  { title: graphicData.socmed[8].title, image: graphicData.socmed[8].image, tilt: 2 },    // Women Empowerment 26
  { title: graphicData.socmed[0].title, image: graphicData.socmed[0].image, tilt: -2 },   // Valentines Day 24 Poster
  { title: graphicData.socmed[13].title, image: graphicData.socmed[13].image, tilt: 3 },  // New Year 2026
];

const SkillBadge = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
    className="flex items-center gap-4 py-3 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
  >
    <span
      className="w-2.5 h-2.5 rounded-full shrink-0"
      style={{ backgroundColor: skill.color }}
    />
    <span className="text-sm sm:text-base font-semibold flex-1 min-w-0 truncate">
      {skill.name}
    </span>
    <div className="flex items-center gap-3 shrink-0">
      <span className="font-mono text-[10px] sm:text-xs text-gray-400 dark:text-gray-600 hidden sm:inline">
        {skill.years}+ yr{skill.years > 1 ? 's' : ''}
      </span>
      <div className="relative w-20 sm:w-24 h-1.5 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min((skill.years / SKILL_MAX_YEARS) * 100, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: index * 0.04 + 0.1, ease: 'easeOut' }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` }}
        />
      </div>
      <span
        className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wide w-16 sm:w-20 text-right"
        style={{ color: skill.color }}
      >
        {skill.tier}
      </span>
    </div>
  </motion.div>
);

// Image with a skeleton/blur-up loading state — avoids grid jump while Cloudinary assets load
// One-time type-in animation for the nav logo, with a blinking cursor that fades once done
const TypeIn = ({ text, className = '', speed = 0.045, startDelay = 0.2 }) => {
  const [done, setDone] = useState(false);
  const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduceMotion) { setDone(true); return; }
    const t = setTimeout(() => setDone(true), (startDelay + text.length * speed) * 1000);
    return () => clearTimeout(t);
  }, [text, speed, startDelay, reduceMotion]);

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.01, delay: startDelay + i * speed }}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: done ? 0 : [1, 0] }}
          transition={done ? { duration: 0.4 } : { duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-[2px] h-[0.9em] ml-0.5 -mb-0.5 bg-current"
        />
      </span>
    </span>
  );
};

const SmartImage = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

// Full-screen lightbox / detail view for a design item, with prev/next navigation within its folder
const Lightbox = ({ items, index, onClose, onNavigate, activeAudioId, setActiveAudioId }) => {
  const item = items[index];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <X size={22} />
      </button>

      {/* Prev / Next */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + items.length) % items.length); }}
            aria-label="Previous item"
            className="absolute left-2 sm:left-6 z-20 p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % items.length); }}
            aria-label="Next item"
            className="absolute right-2 sm:right-6 z-20 p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors cursor-pointer rotate-180 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ArrowLeft size={20} />
          </button>
        </>
      )}

      <motion.div
        key={item.title}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
      >
        <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-gray-900">
          {item.video ? (
            <video
              src={item.video}
              controls
              autoPlay
              loop
              muted={activeAudioId !== item.id}
              playsInline
              className="max-w-full max-h-[70vh] rounded-xl"
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl"
            />
          )}
        </div>
        <div className="w-full flex items-center justify-between gap-4 pt-4 px-1">
          <span className="text-white font-bold text-sm sm:text-base">{item.title}</span>
          <span className="font-mono text-xs text-gray-400 shrink-0">
            {index + 1} / {items.length}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Auto-rotating showcase of a few strongest pieces — crossfades on a timer, pauses on hover, clickable dots
const HeroShowcase = ({ items, onOpen }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 3200);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const current = items[index];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative w-full max-w-xs sm:max-w-sm lg:flex-1 lg:max-w-md shrink-0"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 bg-gray-100 dark:bg-gray-900 cursor-pointer">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, scale: 1.04, rotate: current.tilt }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0"
            onClick={onOpen}
          >
            <SmartImage src={current.image} alt={current.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 w-full pt-16 pb-4 px-5 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
              <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">{current.title}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setIndex(i)}
            aria-label={`Show ${item.title}`}
            className="p-1.5 -m-1.5 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00] rounded-full"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === index ? 'w-6 h-1.5 bg-gradient-to-r from-[#FF3D00] to-[#FF7A00]' : 'w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700'
              }`}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  const [activeAudioId, setActiveAudioId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // NEW: State to track how many items are currently visible
  const [visibleCount, setVisibleCount] = useState(6); 

  // Lightbox: index of the item open within the current folder, or null if closed
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Esc closes the open folder when the lightbox isn't already handling it
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && activeTab && lightboxIndex === null) {
        setActiveTab(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeTab, lightboxIndex]);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  // NEW: Reset visible count back to 6 every time you click a new category tab
  useEffect(() => {
    setVisibleCount(6);
    setLightboxIndex(null);
  }, [activeTab]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Design', href: '#design' },
    { name: 'Tech Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white font-sans">
      
      {/* NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-bold tracking-tighter z-50 cursor-pointer hover:text-gray-500 transition-colors"
          >
            <TypeIn text="flaminghotsisig." />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center font-medium text-sm">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-gray-500 transition-colors">
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-2 z-50">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full h-screen bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 md:hidden flex flex-col pt-8 px-6 gap-6 text-2xl font-bold z-40"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-gray-500 transition-colors border-b border-gray-100 dark:border-gray-900 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HOME / ABOUT ME SECTION */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-6 max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-2xl lg:flex-1">
            <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest uppercase text-gray-500 dark:text-gray-500 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF3D00] to-[#FF7A00]" />
              Graphic &amp; Motion Designer — Argao, Cebu, PH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Designing visuals. <br /> Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3D00] to-[#FF7A00]">logic</span>.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm Jhon Lyod L. Saquilon — a designer first, crafting visual identities and motion work, then building the responsive systems that put them online.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-gradient-to-r from-[#FF3D00] to-[#FF7A00] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-[#FF3D00]/20 text-sm sm:text-base text-center flex-1 sm:flex-none">
                Let's Talk
              </a>
              <a href="/Jhon_Lyod_Saquilon_Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="border border-black dark:border-white px-6 py-3 rounded-xl font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-sm sm:text-base text-center flex-1 sm:flex-none">
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Hero visual: an auto-rotating showcase of a few strongest Social Media pieces */}
          <HeroShowcase items={heroShowcase} onOpen={() => {
            setActiveTab('socmed');
            document.getElementById('design')?.scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>
      </section>

      {/* GRAPHIC DESIGN SECTION */}
      <section id="design" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#FF3D00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D00]" /> 01 — Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Graphic Design Showcase</h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-500">
              {activeTab ? 'Browsing a folder — close it to see the rest.' : 'Open a folder to browse that category.'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!activeTab ? (
              // ---------- FOLDER PICKER VIEW ----------
              <motion.div
                key="folder-picker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
              >
                {graphicCategories.map((cat, i) => (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative text-left cursor-pointer rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00]"
                  >
                    {/* Folder tab */}
                    <div
                      className="h-4 w-14 rounded-t-lg -mb-1 ml-2 transition-transform duration-300 group-hover:-translate-y-0.5"
                      style={{ backgroundColor: cat.color }}
                    />
                    {/* Folder body */}
                    <div
                      className="relative aspect-[4/3] rounded-2xl rounded-tl-none flex flex-col justify-between p-4 sm:p-5 shadow-sm group-hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden"
                      style={{ backgroundColor: 'color-mix(in srgb, ' + cat.color + ' 12%, transparent)' }}
                    >
                      <div className="flex items-start justify-between">
                        <Folder
                          size={32}
                          strokeWidth={1.5}
                          style={{ color: cat.color }}
                          className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                        />
                        <span className="font-mono text-[10px] sm:text-xs text-gray-400 dark:text-gray-600">
                          {String(graphicData[cat.id].length).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] tracking-widest uppercase text-gray-400 dark:text-gray-600 mb-1">
                          {cat.tab}
                        </span>
                        <span className="block font-bold text-sm sm:text-base leading-tight">
                          {cat.label}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              // ---------- OPENED FOLDER VIEW ----------
              <motion.div
                key="folder-open"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {/* Folder header bar — sticky so the close control stays reachable while scrolling the grid */}
                <div className="sticky top-16 sm:top-20 z-30 -mx-4 px-4 md:mx-0 md:px-0 bg-white/90 dark:bg-black/90 backdrop-blur-md flex items-center justify-between mb-6 py-3 border-b border-gray-200 dark:border-gray-800">
                  <button
                    onClick={() => setActiveTab(null)}
                    className="flex items-center gap-2 font-bold text-sm sm:text-base hover:text-gray-500 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00] rounded-md"
                  >
                    <ArrowLeft size={18} />
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: graphicCategories.find((c) => c.id === activeTab)?.color }}
                    />
                    {graphicCategories.find((c) => c.id === activeTab)?.label}
                    <span className="font-mono text-xs text-gray-400 dark:text-gray-600 font-normal">
                      ({graphicData[activeTab].length})
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab(null)}
                    aria-label="Close folder"
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Animated Grid Layout */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <AnimatePresence mode='popLayout'>
                    {graphicData[activeTab].slice(0, visibleCount).map((item, idx) => (
                      <motion.div 
                        key={item.title}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Open ${item.title}`}
                        onClick={() => setLightboxIndex(idx)}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxIndex(idx); } }}
                        className={`relative group bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center shadow-sm hover:shadow-xl transition-shadow duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00] ${item.span}`}
                        
                        // HOVER TO PLAY LOGIC
                        onMouseEnter={(e) => {
                          const video = e.currentTarget.querySelector('video');
                          if (video) video.play(); 
                        }}
                        onMouseLeave={(e) => {
                          const video = e.currentTarget.querySelector('video');
                          if (video) video.pause();
                        }}
                      >
                        
                        {/* CONDITIONAL RENDERING: Video vs Image */}
                        {item.video ? (
                          <>
                            <video 
                              src={item.video}
                              loop 
                              muted={activeAudioId !== item.id} 
                              playsInline
                              poster={item.video.replace('.mp4', '.jpg')}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                            />
                            
                            {/* Minimalist Audio Toggle Button */}
                            {item.hasAudio && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation(); 
                                  setActiveAudioId(activeAudioId === item.id ? null : item.id);
                                }}
                                className="absolute top-4 right-4 z-30 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-all border border-white/10 shadow-lg cursor-pointer opacity-0 group-hover:opacity-100"
                                aria-label="Toggle audio"
                              >
                                {activeAudioId === item.id ? <Volume2 size={16} /> : <VolumeX size={16} />}
                              </button>
                            )}
                          </>
                        ) : item.image ? (
                          <SmartImage
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <ImageIcon size={48} className="text-gray-300 dark:text-gray-700 transition-transform duration-700 group-hover:scale-110" />
                        )}
                                            
                        {/* Hover Title Overlay */}
                        <div className="absolute bottom-0 left-0 w-full pt-16 pb-4 px-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 pointer-events-none">
                          <span className="text-white font-bold tracking-wider text-sm sm:text-base drop-shadow-md">
                            {item.title}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Load More Button Engine */}
                {graphicData[activeTab].length > visibleCount && (
                  <motion.div 
                    layout 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="flex justify-center mt-12 w-full"
                  >
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 6)}
                      className="px-8 py-3 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white font-bold rounded-full transition-colors border border-gray-200 dark:border-gray-800 shadow-sm cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3D00]"
                    >
                      Load More Designs
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* LIGHTBOX / DETAIL VIEW */}
          <AnimatePresence>
            {activeTab && lightboxIndex !== null && (
              <Lightbox
                items={graphicData[activeTab]}
                index={lightboxIndex}
                onClose={() => setLightboxIndex(null)}
                onNavigate={setLightboxIndex}
                activeAudioId={activeAudioId}
                setActiveAudioId={setActiveAudioId}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* PROGRAMS / PROJECTS SECTION */}
      <section id="projects" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#FF3D00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D00]" /> 02 — Built &amp; shipped
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight">Technical Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projectData.map((project) => (
              <motion.div 
                key={project.title} 
                whileHover={{ y: -5 }}
                className="group border border-gray-200 dark:border-gray-800 p-6 sm:p-8 rounded-2xl hover:border-[#FF3D00] dark:hover:border-[#FF3D00] transition-colors bg-white dark:bg-black shadow-sm hover:shadow-xl dark:shadow-none flex flex-col h-full cursor-pointer"
              >
                <div className="relative h-40 sm:h-48 bg-gray-100 dark:bg-gray-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden shrink-0">
                  
                  {/* CONDITIONAL RENDERING: Shows Image if URL exists, otherwise shows placeholder */}
                  {project.image ? (
                    <SmartImage
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs sm:text-sm">App Screenshot Placeholder</span>
                  )}
                  
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 font-mono">{project.stack}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm flex-grow">{project.desc}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 font-bold text-sm hover:underline mt-auto text-[#FF3D00] hover:text-[#FF7A00] transition-colors"
                  >
                    View Details <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS / SOFTWARE PROFICIENCY SECTION */}
      <section id="skills" className="py-20 px-4 md:px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#FF3D00] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D00]" /> 03 — Toolkit
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills &amp; Software</h2>
            </div>
            <span className="hidden sm:block font-mono text-xs text-gray-500 dark:text-gray-500 tracking-widest uppercase">
              Heat check
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold">{group.label}</h3>
                  <span className="font-mono text-xs text-gray-400 dark:text-gray-600">{group.note}</span>
                </div>
                <div>
                  {group.skills.map((skill, i) => (
                    <SkillBadge key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 sm:py-32 px-4 md:px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#FF3D00] mb-3 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D00]" /> 04 — Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's build something together.</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto px-4 sm:px-0">
            Open for freelance design work, motion projects, and dev collaborations — reach out and let's talk about what you're building.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="mailto:loyddsaquilon@gmail.com" className="p-3 sm:p-4 border border-gray-200 dark:border-gray-800 rounded-2xl hover:bg-[#FF3D00] hover:border-[#FF3D00] hover:text-white transition-all hover:scale-110 shadow-sm">
              <Mail size={24} />
            </a>
            <a href="https://github.com/loydskie11" target="_blank" rel="noreferrer" className="p-3 sm:p-4 border border-gray-200 dark:border-gray-800 rounded-2xl hover:bg-[#FF3D00] hover:border-[#FF3D00] hover:text-white transition-all hover:scale-110 shadow-sm">
              <GithubIcon size={24} />
            </a>
            <a href="https://facebook.com/laluna.saquilon" target="_blank" rel="noreferrer" className="p-3 sm:p-4 border border-gray-200 dark:border-gray-800 rounded-2xl hover:bg-[#FF3D00] hover:border-[#FF3D00] hover:text-white transition-all hover:scale-110 shadow-sm">
              <FacebookIcon size={24} />
            </a>
            <a href="https://instagram.com/flaminghotsisig" target="_blank" rel="noreferrer" className="p-3 sm:p-4 border border-gray-200 dark:border-gray-800 rounded-2xl hover:bg-[#FF3D00] hover:border-[#FF3D00] hover:text-white transition-all hover:scale-110 shadow-sm">
              <InstagramIcon size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 text-center text-xs sm:text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} Jhon Lyod L. Saquilon (flaminghotsisig). All rights reserved.</p>
      </footer>

      {/* VERCEL ANALYTICS */}
      <Analytics />
    </div>
  );
};

export default App;