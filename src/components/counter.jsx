import React, { Component } from 'react';





class Counter extends React.Component {

    state= {
        count:0,
        imageUrl:'http://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3'],
    };

   styles={
       fontSize: '10px',
       fontWeight:'bold'
   
   }
 

    render() { 
      
        return (
        <div>
            <img src={this.state.imageUrl} alt="" />
            
            {/* we can print any value here */}
            {/* We can edit the sheet of html in className: "badge badge-primary is to give a blue background and "m-2" is to set the margin to 2*/}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button className="btn btn-secondary btn-sm">Increment</button>
            
             {/* true && 'string' will return string but false && 'string' will return nothing */}
            {this.state.tags.length ===0 && 'Please create a new tag'}
            {this.renderTags()}


        </div> );
    }


      
    renderTags(){
        
        if(this.state.tags.length ===0)
        return <p>There are no tags</p>
        else
        return <ul>
        {/* we need a key to make each maped element unique */}
        {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
    </ul>
    }

    getBadgeClasses() {
        let classes = "bage m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count }= this.state;
        //  Is count equals to 0, if pageYOffset, return 'Zero', no, return count
        return count ===0? 'Zero': count;
    }
}



 
export default Counter;

