var React = require("react");
var GreeterMessage = require("./GreeterMessage");
var GreeterForm = require("./GreeterForm");

var Greeter = React.createClass({
    // This is where we declare the behave of our component::

    // Definimos los valores default de nuestras propiedades, independientemente de como se pasen::
    getDefaultProps: function(){
        return {
          name: "React",
          message: "Default message"
        }
    },

    // Definimos las variables o el estado inicial::
    getInitialState: function(){
        return {
          name: this.props.name,
          message: this.props.message //Asignamos el mismo nombre que estamos usando como propiedad
        };
    },

    handleNewData: function(updates){
        
        this.setState(updates);  
    },

    render: function(){
        var name = this.state.name; //Usamos el nombre que asignamos como propiedad
        var message = this.state.message;

        return (
            <div>
              <GreeterMessage name={name} message={message} />
              <GreeterForm onNewData={this.handleNewData} />
            </div>
        )
    }

});

module.exports = Greeter;