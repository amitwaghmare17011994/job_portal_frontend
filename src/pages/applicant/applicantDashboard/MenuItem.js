import React from 'react'
import Flex from '../../../atoms/Flex';
import { Bold } from '../../../atoms/Text';
import { MenuItemContainer } from './style';

function MenuItem({ onClick, classes, isSelectedOption, icon, title }) {
    return (
        <MenuItemContainer isSelectedOption={isSelectedOption}>

            {/* <div className='inner'></div> */}
            <div className='outer'></div>
            <Flex direction={'column'} className={'inner'} >

                <Flex

                    flex={1}
                    style={{ cursor: "pointer" }}

                    onClick={onClick}
                    className={classes.menuItem}

                >


                    {icon({
                        style: {
                            color: isSelectedOption ? "black" : "white",
                            marginRight: 10,
                        },
                    })}
                    <Bold style={{ color: isSelectedOption ? "black" : "white" }}>
                        {title}
                    </Bold>
                </Flex>

            </Flex>
            <div className='bottom'></div>
            <div className='bottom-inner'></div>
        </MenuItemContainer>
    )
}

export default MenuItem