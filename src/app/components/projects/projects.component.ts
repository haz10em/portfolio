import { AfterViewInit, Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectCard {
  title: string;
  url: string;
  description: string;
  tags: string[];
  githubUrl: string;
  icon: string;
  featured?: boolean;
  liveDemoUrl?: string;
  viewAll?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly projects: ProjectCard[] = [
    {
      title: 'Portfolio Website',
      url: 'https://github.com/Hazemalyaari/portfolio',
      githubUrl: 'https://github.com/alyaarihazem/portfolio.git',
      icon: 'bx-user-circle',
      description:
        'A personal portfolio website featuring about me, contacts, message sending, and a fully customizable responsive design.',
      tags: ['Angular', 'CSS', 'TypeScript']
    },
    {
      title: 'Web School Management System',
      url: 'https://github.com/AlyaariHazem/MySchool.git',
      githubUrl: 'https://github.com/AlyaariHazem/MySchool.git',
      icon: 'bxs-school',
      featured: false,
      description:
        'Bilingual school platform built with Angular 18 and ASP.NET Core, with a reusable design system for consistent UI components.',
      tags: ['Angular 18', 'ASP.NET Core', 'Design System']
    },
    {
      title: 'E-Commerce Product Page Task',
      url: 'https://github.com/AlyaariHazem/E-Commerce',
      githubUrl: 'https://github.com/AlyaariHazem/E-Commerce',
      icon: 'bx-cart',
      liveDemoUrl: 'https://magenta-kitten-9a6e8a.netlify.app/',
      description:
        'Responsive Angular product page with category filtering, lazy loading, and mobile-friendly design focused on accessibility and modern UI.',
      tags: ['Angular 18', 'TypeScript', 'SCSS']
    },
    {
      title: 'Medisync Website',
      url: 'https://github.com/AlyaariHazem/website-Medisync',
      githubUrl: 'https://github.com/AlyaariHazem/website-Medisync',
      icon: 'bxs-clinic',
      description:
        'Responsive website built with Angular 18 and ASP.NET Core 8, using modular components and the Repository Pattern.',
      tags: ['Angular 18', 'ASP.NET Core 8', 'Repository Pattern']
    },
    {
      title: 'Hire-Me',
      url: 'https://github.com/AlyaariHazem/Hire-Me',
      githubUrl: 'https://github.com/AlyaariHazem/Hire-Me',
      icon: 'bx-briefcase-alt-2',
      description:
        'Interactive recruitment platform with job posting, candidate management, and a dashboard-style user experience.',
      tags: ['Angular', 'Dashboard', 'UI']
    },
    {
      title: 'Microservices',
      url: 'https://github.com/AlyaariHazem/Microservices',
      githubUrl: 'https://github.com/AlyaariHazem/Microservices',
      icon: 'bx-layer',
      description:
        'Learning project exploring microservices patterns with .NET and service-based application design.',
      tags: ['.NET', 'Microservices', 'REST API']
    },
    {
      title: 'Clean Architecture .NET',
      url: 'https://github.com/AlyaariHazem/clean-architecture-dotnet',
      githubUrl: 'https://github.com/AlyaariHazem/clean-architecture-dotnet',
      icon: 'bx-code-alt',
      description:
        'ASP.NET Core project organized with clean architecture concepts and separation of concerns.',
      tags: ['ASP.NET Core', 'Clean Architecture', 'C#']
    },
    {
      title: 'Tawzif Platform',
      url: 'https://github.com/AlyaariHazem/tawzif',
      githubUrl: 'https://github.com/AlyaariHazem/tawzif',
      icon: 'bx-grid-alt',
      description:
        'Micro frontend platform for companies, jobs, and job seekers built as a modular Angular experience.',
      tags: ['Angular', 'Micro Frontend', 'TypeScript']
    },
    {
      title: 'Companies Microfrontend',
      url: 'https://github.com/AlyaariHazem/Companies',
      githubUrl: 'https://github.com/AlyaariHazem/Companies',
      icon: 'bx-building',
      description:
        'Angular micro frontend for company-related modules designed to integrate into a larger platform.',
      tags: ['Angular', 'Micro Frontend', 'Module Federation']
    },
    {
      title: 'Jobs Microfrontend',
      url: 'https://github.com/AlyaariHazem/Jobs',
      githubUrl: 'https://github.com/AlyaariHazem/Jobs',
      icon: 'bx-briefcase',
      description:
        'Angular micro frontend focused on job listings and job management features.',
      tags: ['Angular', 'Micro Frontend', 'Jobs']
    },
    {
      title: 'Task Manager',
      url: 'https://github.com/AlyaariHazem/Angular-Task-Manager',
      githubUrl: 'https://github.com/AlyaariHazem/Angular-Task-Manager',
      icon: 'bx-task',
      description:
        'Angular task management application with task creation, status updates, and component interaction patterns.',
      tags: ['Angular', 'RxJS', 'State Management']
    },
    {
      title: 'Desktop Application Project',
      url: 'https://github.com/AlyaariHazem/My-School-.git',
      githubUrl: 'https://github.com/AlyaariHazem/My-School-.git',
      icon: 'bx-desktop',
      description:
        'Desktop application developed with .NET 8 in collaboration with a teammate, with emphasis on performance, usability, and team-based delivery.',
      tags: ['.NET 8', 'Desktop App', 'C#']
    },
    {
      title: 'Learning Flutter Project',
      url: 'https://github.com/AlyaariHazem?tab=repositories',
      githubUrl: 'https://github.com/AlyaariHazem?tab=repositories',
      icon: 'bxl-flutter',
      description:
        'Learning-focused Flutter project covering cross-platform UI, responsive design, state management, and reusable widgets.',
      tags: ['Flutter', 'Dart', 'Responsive Design']
    },
    {
      title: 'Eshop Modular Monolith',
      url: 'https://github.com/AlyaariHazem/EshopModularMonoliths',
      githubUrl: 'https://github.com/AlyaariHazem/EshopModularMonoliths',
      icon: 'bx-package',
      description:
        'E-commerce platform built as a modular monolith with a focus on backend structure and modular design.',
      tags: ['.NET', 'Docker', 'Modular Monolith']
    },
    {
      title: 'View All Projects',
      url: 'https://github.com/AlyaariHazem?tab=repositories',
      githubUrl: 'https://github.com/AlyaariHazem?tab=repositories',
      icon: 'bx-folder-open',
      viewAll: true,
      description:
        'Explore all my repositories and projects on GitHub. Including learning projects, experiments, and open-source contributions.',
      tags: []
    }
  ];

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (reducedMotion || !finePointer) {
      return;
    }

    const cards = document.querySelectorAll('#services .project-card');
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const onMove = (event: Event) => {
        const pointer = event as PointerEvent;
        const rect = card.getBoundingClientRect();
        (card as HTMLElement).style.setProperty('--mx', `${pointer.clientX - rect.left}px`);
        (card as HTMLElement).style.setProperty('--my', `${pointer.clientY - rect.top}px`);
      };

      card.addEventListener('pointermove', onMove);
      cleanups.push(() => card.removeEventListener('pointermove', onMove));
    });

    this.destroyRef.onDestroy(() => cleanups.forEach((cleanup) => cleanup()));
  }
}
