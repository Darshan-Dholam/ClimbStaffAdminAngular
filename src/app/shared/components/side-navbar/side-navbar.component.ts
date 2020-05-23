import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

declare var Snap: any;
declare var $: any;

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})

export class SideNavbarComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('currentUser'));
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


  ngOnInit() {

    const snapper = new Snap({
      element: document.getElementById('content'),
      dragger: null,
      disable: 'right',
      addBodyClasses: true,
      hyperextensible: true,
      resistance: 0.2,
      flickThreshold: 50,
      transitionSpeed: 0.2,
      easing: 'ease',
      maxPosition: (window.innerWidth * 80 / 100),
      minPosition: -(window.innerWidth * 80 / 100),
      tapToClose: true,
      touchToDrag: true,
      slideIntent: 10,
      minDragDistance: 5
    });

    this.router.events.pipe().subscribe(() => {
          snapper.close();
      });

    $('#menuIcon').click( function(e){
      if ( snapper.state().state == 'left' ) {
            snapper.close();
        } else {
            snapper.open('left');
        }
    });

    snapper.on('animated', function() {
    if( $('body').hasClass('snapjs-left') || $('body').hasClass('snapjs-right') ) {
        $('body').css({
            position: 'fixed',
            top: $(window).scrollTop() * -1
        });
    }
    else if( $('body').css('position') == 'fixed' ) {
        var top = parseFloat( $('body').css('top') ) * -1;
            $('body').css({
            position: '',
            top: 0
        });

        if( top != 0 ) {
            $(window).scrollTop( top );
        }
    }

    if (snapper.state().state === 'closed'){
        $('.blocker').hide();
      }else{
        $('.blocker').show();
      }
});

	   snapper.on('close', function() {
		$('.blocker').hide();
	})

	   $('.blocker').on('touchstart', function(e) {
		e.preventDefault();
	});

  }
}

