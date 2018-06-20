import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../component/Header';

test('Should renderer header correctly', () =>{

    const wrapper = shallow(<Header startLogout={ () => {}}/>);
    expect(wrapper).toMatchSnapshot();
    /*
    expect(wrapper.find('h1').text()).toBe('Expensify');
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    console.log(React.version); */
})

test('Should call startLogut on button click', ()=> {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
    
})