// IMPORTS
import { servicesData } from '../../data/servicesData.js';
import { socialMetricsData } from '../../data/socialMetricsData.js';
import { services } from '../components/services.js';
import { socialMetrics } from '../components/socialMetrics.js';

// EXECUTION

/* SOCIAL METRICS: start */

const res = socialMetrics('#metrics_block', socialMetrics);
const [isError, msg] = res;

if (isError) {
    console.error(msg);
} else {
    console.log(msg);
}

/* SOCIAL METRICS: end */

/* HEADER: start */
/* HEADER: end */

/* HERO: start */
/* HERO: end */

/* ABOUT ME: start */
/* ABOUT ME: end */

/* SERVICES: start */

const homeServicesData = [
    {
        icon: 'calendar',
        title: 'Tindiriušku',
        desc: `Kasmetinis sezono atidarymas su fanfarais ir
        kruasanais, pagardintas linksmonadu ir
        šypsenomis.`,
    },
    {
        icon: 'profile-female',
        title: 'Asbesto fėjos',
        desc: `Ūkio darbai nešiojant akmenis iš trobos,
        sijojant žvyrą batuose ir barstant smėlį
        nepatogu sakyt kur.`,
    },
    {
        icon: 'book-open',
        title: 'Poezijos pavasaris',
        desc: `Lyriniai nukrypimai ir prisipažinimai, kaistant
        atmosferai Eroto glėbyje.`,
    },
    {
        icon: 'piechart',
        title: 'Pušku-pušku',
        desc: `Sėdmaišininkų fiesta sėdint ratu aplink laužą ir
        kilojant kojomis kibirą malkų.`,
    },
    {
        icon: 'anchor',
        title: 'Vidurvasario baidarių žygis',
        desc: `Nežabota tradicija tapusi alkofiesta,
        sutraukianti gausų būrį tarpusavyje nepažįstamų
        žmonių.`,
    },
    {
        icon: 'scope',
        title: 'Rudens lygė',
        desc: `Tas metas, kai ateina laikas skaičiuoti
        viščiukus ir aiškintis obuolmušių turnyro
        nugalėtojus.`,
    },
    {
        icon: 'wine',
        title: 'Hello, vynas!',
        desc: `Čia ir taip visiems viskas aišku. Oplia,
        kindzmakarūriai!`,
    },
    {
        icon: 'gift',
        title: 'Kalėda, Kalėda',
        desc: `Kas gali būti geriau už židinyje spragsinčią
        ugnį, pagardintą šaunia draugų kompanija su
        pirtimi?`,
    },
    {
        icon: 'refresh',
        title: 'Naujieji Metai',
        desc: `Senųjų palydėtuvės ir naujųjų sutiktuvės Šimonių
        girios glūdumoje. Magiškas laiko ratas sukasi atgalios.`,
    },
];

// services('services_block', homeServicesData);
services('services_block', [5, 'asd', true, [], services, null, undefined]);
services('services_block', [{}]);

/* SERVICES: end */

/* RESUME: start */
/* RESUME: end */

/* FREELANCE: start */
/* FREELANCE: end */

/* PORTFOLIO: start */
/* PORTFOLIO: end */

/* TESTIMONIALS: start */
/* TESTIMONIALS: end */

/* BLOG: start */
/* BLOG: end */

/* CONTACT: start */
/* CONTACT: end */

/* FOOTER: start */
/* FOOTER: end */
