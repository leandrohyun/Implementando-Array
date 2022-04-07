//Creating an Array

const linhasOnibus = [];
linhasOnibus[0]= "Linha1";
linhasOnibus[1]= "Linha2";
linhasOnibus[2]= "Linha3";
linhasOnibus[3]= "Linha4";
linhasOnibus[4]= "Linha5";
linhasOnibus[5]= "Linha6";
console.log( linhasOnibus );

//Length

console.log( linhasOnibus.length );

//Insert completo

class myArray{
    constructor(count = 0){
				if( count < 0 )
					count = 0;
				this.count = count;
				this.length_ = 2 * this.count;
        this.items = new Array( this.length_ );				
        for( let i = 0; i < this.count; i++ )
            this.items[ i ] = 0;
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
    printArray(){
        for( let i = 0; i < this.count; i++ )
            console.log(this.items[i]);
    }
}

const contador1 = new myArray( 1 );
contador1.insert("Linha1");
contador1.insert("Linha2");
contador1.insert("Linha3");
contador1.insert("Linha4");
contador1.insert("Linha5");
contador1.insert("Linha6");
contador1.printArray();


//RemoveAt

removeAt( index ); {
    if( index < 0 || index >= this.count )  
    throw new Error("Invalid index");
    for( let i = index; i < this.count; i++ )
    this.items[ i ] = this.items[ i + 1 ];
    this.count--;
    }
    printArray(); 
    i = 0; i < this.count; i++
            console.log(this.items[i]);
    
    
    const contador2 = new myArray( );
    
    contador2.insert('Linha1');
    contador2.insert('Linha2');
    contador2.insert('Linha3');
    contador2.insert('Linha4');
    contador2.insert('Linha5');
    contador2.insert('Linha6');
    console.log("Antes do removeAt");
    contador2.printArray();
    
    console.log("Depois do removeAt");
    contador2.removeAt( 0 );
    contador2.removeAt( 3 );
    contador2.removeAt( 5 );
    contador2.printArray();


//indexOf

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
