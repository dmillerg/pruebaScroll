import { animate, query, stagger, state, style, transition, trigger, useAnimation } from "@angular/animations";


export const openClose = trigger('openClose', [
    // ...

    state('active', style({
        width: '100%',
        height: '100%',
        opacity: 1,
        backgroundColor: '#2e3138'
    })),
    state('esperaup', style({
        width: '100%',
        height: '100%',
        opacity: 0,
        backgroundColor: '#2e3138',
        transform: 'translateY(-100%)'
    })),
    state('esperadown', style({
        width: '100%',
        height: '100%',
        opacity: 0,
        backgroundColor: '#2e3138',
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
        animate('1000ms')
    ]),
    transition('active => esperadown', [
        animate('1000ms')
    ]),
    transition('esperaup => active', [
        animate('1000ms')
    ]),
    transition('esperadown => active', [
        animate('1000ms')
    ]),
])

export const homeAnim = trigger('homeAnim', [
    state('esperadown', style({
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        opacity: 0,
    })),
    state('esperaup', style({
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
        opacity: 0,
    })),
    state('active', style({
        width: '100%',
        height: '100%',
        
        backgroundColor: 'yellow',
        opacity: 1,
    })),
    transition('esperadown => active', [
        animate('10000ms')
    ]),
    transition('esperaup => active', [
        animate('10000ms')
    ]),
    transition('active => *', [
        animate('10000ms')
    ]),
]);