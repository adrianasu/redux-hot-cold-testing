import reducer  from './reducer';
import { restartGame, makeGuess, generateAuralUpdate } from './actions';

describe('Reducer', () => {
    // set up some dummy data
    const someGuesses = [1, 2, 3, 4];

    it('Should set initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: 'UNKNOWN'});
        expect(state).toMatchObject({
            guesses: []
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: 'UNKNOWN'});
        expect(state).toBe(currentState);
    })

    describe('restartGame', () => {
        it('Should start a new game', () => {
            let correctAnswer = 25;
            let state = reducer({someGuesses}, restartGame(correctAnswer));
            expect(state).toMatchObject({
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: ''
            });
            expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
            expect(state.correctAnswer).toBeLessThanOrEqual(100);
        });
    });

    describe('makeGuess', () => {

        it('Should ask for a valid number', () => {  
            let state = {
                guesses: [],
                feedback: ''
            }
            state = reducer(state, makeGuess('a'));
            expect(state.feedback).toEqual('Please enter a valid number.');
        });

        it('Should make a guess', () => {
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 10
            }
            state = reducer(state, makeGuess(100));
            expect(state).toMatchObject({
                guesses: [100],
                feedback: "You're Ice Cold..."
            });

            state = reducer(state, makeGuess(40));
            expect(state).toMatchObject({
                guesses: [100, 40],
                feedback: "You're Cold..."
            });

            state = reducer(state, makeGuess(20));
            expect(state).toMatchObject({
                guesses: [100, 40, 20],
                feedback: "You're Warm."
            });

            state = reducer(state, makeGuess(11));
            expect(state).toMatchObject({
                guesses: [100, 40, 20, 11],
                feedback: "You're Hot!"
            });

            state = reducer(state, makeGuess(10));
            expect(state).toMatchObject({
                guesses: [100, 40, 20, 11, 10],
                feedback: "You got it!"
            });
        });
    });

    describe('generateAuralUpdate', () => {
        it('Should generate aural update', () => {
            let state = {
                guesses: [10, 15, 20],
                feedback: "You're Ice Cold...",
                auralStatus: ''
            }
            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Ice Cold... You've made 3 guesses. In order of most- to least-recent, they are: 20, 15, 10");
        })
    })

})