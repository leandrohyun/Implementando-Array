class myArray{
    constructor(count = 0){
        if( count < 0 )
          count = 0;
        this.count = count;
        this.items = new Array( 2 * this.count );				
        for( let i = 0; i < this.count; i++ )
            this.items[ i ] = 0;
    }  
    printArray(){
        for( let i = 0; i < this.count; i++ )
            console.log(this.items[i]);
    }
    insert( item ){
        if (this.items.length === this.count){
            let newItems = new Array( this.count * 2 );
            for( let i = 0; i < this.count; i++ )
                newItems[ i ] = this.items[ i ];
            this.items = newItems;
        }
        this.items[this.count++] = item;
    }
    verifyIndex_( index ){
        if( index < 0 || index >= this.count )  
            throw new Error("Invalid index");
    }
    put( item, index ){
        this.verifyIndex_( index );
        this.items[index] = item;
    }
    removeAt( index ) {
        this.verifyIndex_( index );
        for( let i = index; i < this.count; i++ )
            this.items[ i ] = this.items[ i + 1 ];

        this.count--;
    }   
    indexOf( item ){
        for( let i = 0; i < this.count; i++ )
            if( item == this.items[ i ] )
                return i;
        return null;
    }
    printArray(){
        for( let i = 0; i < this.count; i++ )
            console.log(this.items[i]);
    }
} 
  const contador = new myArray( 2 );
  console.log("Init");
  contador.printArray();
  console.log("Insert: linha1, linha2 and linha3");
  contador.insert("linha1");
  contador.insert("linha2");
  contador.insert("linha3");  
  contador.printArray();
  console.log(" linha9 in index 0");
  contador.put("linha9", 0);
  contador.printArray();
  console.log("remove index 2");
  contador.removeAt( 2 );
  contador.printArray();
  console.log("remove index 3");
  contador.removeAt( 3 );
  contador.printArray();
 

  index = contador.indexOf( 20 );
  if( index != null )
    console.log( "Index ", index );
  else
    console.log( "Item não encontrado");
