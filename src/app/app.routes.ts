import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Core Pages
import { Landing } from './pages/landing/landing';
import { Home } from './pages/home/home';
import { ImNew } from './pages/home/imnew/imnew';
import { Connect } from './pages/home/connect/connect';
import { Group } from './pages/home/groups/groups';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

// Info Pages
import { About } from './pages/about/about';
import { Leadership } from './pages/leadership/leadership';

// Ministries
import { Ministries } from './pages/ministries/ministries';
import { MinistryDetail } from './pages/ministry-detail/ministry-detail';

// Outreach & Events
import { Outreaches } from './pages/outreaches/outreaches';
import { Events } from './pages/events/events';
import { EventDetail } from './pages/event-detail/event-detail';

// Media & Interaction
import { Gallery } from './pages/gallery/gallery';
import { Contact } from './pages/contact/contact';

// Extra Pages
import { Testimonials } from './pages/testimonials/testimonials';
import { Faq } from './pages/faq/faq';
import { Volunteer } from './pages/volunteer/volunteer';
import { Announcements } from './pages/announcements/announcements';


export const routes: Routes = [

  // 🌿 Landing
  { path: '', component: Home },

  // 🏠 Core Pages
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'imnew', component: ImNew },
  { path: 'connect', component: Connect },
  { path: 'groups', component: Group },


  // 📖 Info
  { path: 'about', component: About },
  { path: 'leadership', component: Leadership },

  // 🙏 Ministries
  { path: 'ministries', component: Ministries },
  { path: 'ministries/:id', component: MinistryDetail },

  // 🌍 Outreach & Events
  { path: 'outreaches', component: Outreaches },
  { path: 'events', component: Events },
  { path: 'events/:id', component: EventDetail },

  // 🖼 Media
  { path: 'gallery', component: Gallery },

  // 📞 Contact
  { path: 'contact', component: Contact },

  // ⭐ Extra Features
  { path: 'testimonials', component: Testimonials },
  { path: 'faq', component: Faq },
  { path: 'volunteer', component: Volunteer },
  { path: 'announcements', component: Announcements },

  // ❌ 404 fallback
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
