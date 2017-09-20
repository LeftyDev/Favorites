import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    cards = [
        {
            imgPath: "forest.jpg",
            title: "Forest Bench & Lake",
            desc: "I really wish I was here right now instead.",
            favorited: false
        },
        {
            imgPath: "forest2.jpg",
            title: "Hazy Forest",
            desc: "I really wish I was here right now instead.",
            favorited: false
        },
        {
            imgPath: "forest3.jpg",
            title: "Aesthetic Sunlit Trees",
            desc: "I really wish I was here right now instead.",
            favorited: false
        }
    ];

    constructor(public navCtrl: NavController) {

    }

    clickFav(card) {
        // if (card) {
        //     card.favorited = !card.favorited;
        // }

        let index = this.cards.indexOf(card);

        if (index > -1) {
            if (card.favorited) {
                this.cards[index].favorited = false;
            } else {
                this.cards[index].favorited = true;
            }
        }
    }

}
