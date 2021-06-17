

class MazeSolver{

   constructor (maze)
   {
      this.maze = maze;
   }

   /**
	 * Attempts to traverse the maze using a stack. Inserts special
	 * characters indicating locations that have been TRIED and that
	 * eventually become part of the solution PATH.
	 *
	 * @param row row index of current location
	 * @param column column index of current location
	 * @return true if the maze has been solved
	 */
   traverse()
   {
      let done = false;
      let pos = new Position();
      let stack = new Stack();

      stack.push(pos);

      while(/* 2 terminal conditions */)
      {
         // get next pos
         // mark as "TRIED"

         if (/* we are in final square of maze */)
         {
            done = true;
         }
         else{ /* Add 4 surrounding positions to the stack */


         }  
      }
      return done;
   }

   	/**
	 * Push a new attempted move onto the stack (after confirming it's valid)
	 * @param x represents x coordinate
	 * @param y represents y coordinate
	 * @param stack the working stack of moves within the grid
	 * @return stack of moves within the grid
	 */
	pushNewPos(x,  y, stack)
   {


   }


   

}