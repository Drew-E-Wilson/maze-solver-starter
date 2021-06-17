class Maze {

   constsructor (grid){
      this.grid = grid;
   }

   static get TRIED() { return 2};
   static get PATH() { return 3;}

   tryPosition (row, col){
      /* mark as TRIED */
   }

   getRows()
   {
      /* just return the value */
   }

   getColumns(){
      /* just return the value */
   }

   markPath(row, col)
   {
      /* mark as PATH */
   }

   validPosition(row, col){
      let result = false;
      // check if is bounds

         // check if cell is not blocked nor previously tried


      return result;
   }


}