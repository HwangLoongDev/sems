import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NavItem } from 'src/app/@shared/models/nav-item.model';

@Component({
  selector: 'se-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
})
export class ClassicComponent {
  mobileQuery: MediaQueryList;

  navItems: NavItem[] = [
    {
      displayName: 'DevFestFL',
      iconName: 'recent_actors',
      route: 'devfestfl',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'devfestfl/speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'devfestfl/speakers/michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'devfestfl/speakers/michael-prentice/material-design',
                },
              ],
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'devfestfl/speakers/stephen-fluin',
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'devfestfl/speakers/stephen-fluin/what-up-web',
                },
              ],
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'devfestfl/speakers/mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'devfestfl/speakers/mike-brocchi/my-ally-cli',
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route:
                    'devfestfl/speakers/mike-brocchi/become-angular-tailor',
                },
              ],
            },
          ],
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          route: 'devfestfl/sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'devfestfl/sessions/material-design',
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'devfestfl/sessions/what-up-web',
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'devfestfl/sessions/my-ally-cli',
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'devfestfl/sessions/become-angular-tailor',
            },
          ],
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'devfestfl/feedback',
        },
      ],
    },
    {
      displayName: 'Disney',
      iconName: 'videocam',
      route: 'disney',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'disney/speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'disney/speakers/michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'disney/speakers/michael-prentice/material-design',
                },
              ],
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'disney/speakers/stephen-fluin',
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'disney/speakers/stephen-fluin/what-up-web',
                },
              ],
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'disney/speakers/mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'disney/speakers/mike-brocchi/my-ally-cli',
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'disney/speakers/mike-brocchi/become-angular-tailor',
                },
              ],
            },
          ],
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          route: 'disney/sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'disney/sessions/material-design',
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'disney/sessionswhat-up-web',
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'disney/sessionsmy-ally-cli',
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'disney/sessionsbecome-angular-tailor',
            },
          ],
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'disney/feedback',
        },
      ],
    },
    {
      displayName: 'Orlando',
      iconName: 'videocam',
      route: 'orlando',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'orlando/speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'orlando/speakers/michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'orlando/speakers/michael-prentice/material-design',
                },
              ],
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'orlando/speakers/stephen-fluin',
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'orlando/speakers/stephen-fluin/what-up-web',
                },
              ],
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'orlando/speakers/mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'orlando/speakers/mike-brocchi/my-ally-cli',
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'orlando/speakers/mike-brocchi/become-angular-tailor',
                },
              ],
            },
          ],
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          route: 'orlando/sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'orlando/sessions/material-design',
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'orlando/sessions/what-up-web',
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'orlando/sessions/my-ally-cli',
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'orlando/sessions/become-angular-tailor',
            },
          ],
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'orlando/feedback',
        },
      ],
    },
    {
      displayName: 'Maleficent',
      iconName: 'videocam',
      route: 'maleficent',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          route: 'maleficent/speakers',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'maleficent/speakers/michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'maleficent/speakers/michael-prentice/material-design',
                },
              ],
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'maleficent/speakers/stephen-fluin',
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'maleficent/speakers/stephen-fluin/what-up-web',
                },
              ],
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'maleficent/speakers/mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'maleficent/speakers/mike-brocchi/my-ally-cli',
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route:
                    'maleficent/speakers/mike-brocchi/become-angular-tailor',
                },
              ],
            },
          ],
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          route: 'maleficent/sessions',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'maleficent/sessions/material-design',
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'maleficent/sessions/what-up-web',
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'maleficent/sessions/my-ally-cli',
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'maleficent/sessions/become-angular-tailor',
            },
          ],
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'maleficent/feedback',
        },
      ],
    },
  ];

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
