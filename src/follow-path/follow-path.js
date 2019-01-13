import React, { Component } from 'react';
import anime from 'animejs';

import './follow-path.css';

class FollowPath extends Component {
  componentDidMount(){
    var path = anime.path('path');

    anime({
        targets: '.green',
        //translateX: 2000,
        //width: '100%',
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
      });
    // anime({
    //   targets: '.green',
    //   translateX: path,
    //   translateY: path,
    //   rotate: path,
    //   duration: 3000,
    //   loop: true,
    //   easing: 'linear'
    // });
    
    // anime({
    //   targets: 'path',
    //   opacity: 0,
    //   duration: 6000,
    //   loop: true,
    //   direction: 'alternate',
    //   easing: 'easeInOutExpo'
    // });
  }
  render() {
    return (
        <section>
            <article>
                <svg width="256" height="112" viewBox="0 0 256 112">
                    <path fill="none" stroke="#FFF" d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"/>
                </svg>
                <div className="green"></div>
            </article>
        </section>
    );
  }
}

export default FollowPath;
