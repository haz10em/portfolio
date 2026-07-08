import { AfterViewInit, Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillItem {
  name: string;
  icon: string;
  percent: number;
}

interface AngularTopic {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly leftSkills: SkillItem[] = [
    { name: 'C#', icon: 'bxl-c-plus-plus', percent: 95 },
    { name: 'Angular', icon: 'bxl-angular', percent: 95 },
    { name: 'ASP.NET Core', icon: 'bx-server', percent: 90 },
    { name: 'SQL Server & MySQL', icon: 'bx-data', percent: 85 }
  ];

  readonly rightSkills: SkillItem[] = [
    { name: 'Microservices', icon: 'bx-layer', percent: 85 },
    { name: 'RxJS & NgRx', icon: 'bx-network-chart', percent: 84 },
    { name: 'Git & GitHub', icon: 'bxl-git', percent: 82 },
    { name: 'REST APIs & JWT', icon: 'bx-link', percent: 84 }
  ];

  readonly angularFoundational: AngularTopic[] = [
    { label: 'Components and Templates', icon: 'bx-book-open' },
    { label: 'Components', icon: 'bx-cube' },
    { label: 'Routing', icon: 'bx-git-branch' },
    { label: 'Forms', icon: 'bx-edit-alt' },
    { label: 'HTTP', icon: 'bx-cloud-download' },
    { label: 'Responsive UI', icon: 'bx-devices' }
  ];

  readonly angularMidLevel: AngularTopic[] = [
    { label: 'RxJS', icon: 'bx-network-chart' },
    { label: 'Signals', icon: 'bx-broadcast' },
    { label: 'NgRx', icon: 'bx-layer' },
    { label: 'HTTP Interceptors', icon: 'bx-check-shield' },
    { label: 'Reusable Angular Libraries', icon: 'bx-extension' },
    { label: 'npm Package Publishing', icon: 'bxl-npmjs' },
    { label: 'Angular Open Source', icon: 'bx-git-branch' }
  ];

  readonly openSourcePackages: AngularTopic[] = [
    { label: 'data-grid-angular', icon: 'bx-table' },
    { label: 'hijiri-calendar', icon: 'bx-calendar' },
    { label: 'Angular Data Grid components', icon: 'bx-grid-alt' },
    { label: 'Hijri date utilities for forms', icon: 'bx-edit-alt' }
  ];

  barWidth(skill: SkillItem): number {
    return this.animatedSkills()[skill.name] ? skill.percent : 0;
  }

  private readonly animatedSkills = signal<Record<string, boolean>>({});

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      const all: Record<string, boolean> = {};
      [...this.leftSkills, ...this.rightSkills].forEach((s) => {
        all[s.name] = true;
      });
      this.animatedSkills.set(all);
      return;
    }

    const items = document.querySelectorAll('#skills .skill-item');
    if (!items.length) {
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const reveal = (item: Element) => {
      const name = item.getAttribute('data-skill');
      if (!name || this.animatedSkills()[name]) {
        return;
      }
      this.animatedSkills.update((current) => ({ ...current, [name]: true }));
    };

    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => reveal(item));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -5% 0px' }
    );

    items.forEach((item) => {
      if (this.isInViewport(item)) {
        reveal(item);
        return;
      }
      observer.observe(item);
    });

    this.initSkillSpotlight(items);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private initSkillSpotlight(items: NodeListOf<Element>): void {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (reducedMotion || !finePointer) {
      return;
    }

    items.forEach((item) => {
      item.addEventListener('pointermove', (event) => {
        const pointer = event as PointerEvent;
        const rect = item.getBoundingClientRect();
        (item as HTMLElement).style.setProperty('--sx', `${pointer.clientX - rect.left}px`);
        (item as HTMLElement).style.setProperty('--sy', `${pointer.clientY - rect.top}px`);
      });
    });
  }

  private isInViewport(el: Element): boolean {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh * 0.92 && rect.bottom > vh * 0.05;
  }
}
