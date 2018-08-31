import React from 'react'

class TransferComponent extends React.Component {
  
  setGender(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="tabs" onChange={this.setGender.bind(this)}>
        <input type="radio" name="tab" id="tab1" />
        <label htmlFor="tab1">Home</label>
        <input type="radio" name="tab" id="tab2" />
        <label htmlFor="tab2">Portfolio</label>
        <input type="radio" name="tab" id="tab3" />
        <label htmlFor="tab3">Archives</label>
        <input type="radio" name="tab" id="tab4" />
        <label htmlFor="tab4">Contact</label>

        <div className="tab-content-wrapper">
          <div id="tab-content-1" className="tab-content">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur mattis nibh, non ornare neque. In bibendum consequat imperdiet. Duis eros ex, vestibulum vel fermentum ut, gravida at turpis. Etiam porta sem dolor, at finibus metus consequat a. Aliquam erat volutpat. Donec sollicitudin metus quis magna faucibus, vitae ultrices libero ultrices. Sed ut dui vitae velit laoreet commodo. Nam suscipit purus a ultricies auctor. </p>
          </div>
          <div id="tab-content-2" className="tab-content">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur mattis nibh, non ornare neque. In bibendum consequat imperdiet. Duis eros ex, vestibulum vel fermentum ut, gravida at turpis. Etiam porta sem dolor, at finibus metus consequat a. Aliquam erat volutpat.  </p>
          </div>
          <div id="tab-content-3" className="tab-content">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur mattis nibh, non ornare neque. In bibendum consequat imperdiet. Duis eros ex, vestibulum vel fermentum ut, gravida at turpis. Etiam porta sem dolor, at finibus metus consequat a. Aliquam erat volutpat. Donec sollicitudin metus quis magna faucibus, vitae ultrices libero ultrices. Sed ut dui vitae velit laoreet commodo. Nam suscipit purus a ultricies auctor. </p>
          </div>
          <div id="tab-content-4" className="tab-content">

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur mattis nibh, non ornare neque. In bibendum consequat imperdiet. Duis eros ex, vestibulum vel fermentum ut, gravida at turpis. Etiam porta sem dolor, at finibus metus consequat a. Aliquam erat volutpat. </p>
          </div>
        </div>
      </div>
    )
  }
}

export default TransferComponent
