import { Puzzle } from '@/interface/puzzle';
import { PuzzleCode, PuzzleType } from '../enums';
import puzzleData from '@/static/data/puzzle';

export default {
    getPuzzle(code: PuzzleCode): Puzzle | undefined {
        const foundPuzzle = puzzleData.find((puzzle: Puzzle) => puzzle.code === code);
        if (foundPuzzle) {
            return foundPuzzle;
        } else {
            throw new Error("PUZZLE_NOT_FOUND");
        }
    },

    getAllPuzzle(): Puzzle[] {
        return puzzleData;
    }
};