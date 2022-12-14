import { animate, query, stagger, state, style, transition, trigger, useAnimation } from "@angular/animations";


export const openClose = trigger('openClose', [
    // ...

    state('active', style({
        width:'100%',
        height: '100%',
        opacity: 0.5,
        backgroundColor: 'green'
    })),
    state('esperaup', style({
        width:'100%',
        height: '100%',
        opacity: 0,
        backgroundColor: 'red',
        transform: 'translateY(-100%)'
    })),
    state('esperadown', style({
        width:'100%',
        height: '100%',
        opacity: 0,
        backgroundColor: 'red',
        transform: 'translateY(100%)'
    })),
    // transition(':enter', [
    //     style({ opacity: 0, transform: 'translateY(-200%)'}),
    //     animate('500ms', style({ opacity: 1 ,transform: 'translateY(0%)'})),
    // ]),
    // transition(':leave', [
    //     style({ transform: 'scale(1)', opacity: 1 }),
    //     animate('500ms', style({ transform: 'scale(0)', opacity: 0 })),
    // ]),
    transition('active => esperaup', [
        animate('500ms')
    ]),
     transition('active => esperadown', [
        animate('500ms')
    ]),
    transition('esperaup => active', [
        animate('500ms')
    ]),
    transition('esperadown => active', [
        animate('500ms')
    ]),
])