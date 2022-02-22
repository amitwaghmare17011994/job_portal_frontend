import MessageIcon from '@mui/icons-material/ChatOutlined'
import MenuIcon from '@mui/icons-material/MenuOpenRounded'
import Notifications from '@mui/icons-material/NotificationsActive'
import Search from '@mui/icons-material/SearchRounded'

import { Avatar, Badge, Paper } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import React from 'react'
import Flex from '../../../atoms/Flex'
import { Bold } from '../../../atoms/Text'
import { PaperAvatar } from './style'


function Header() {
    return (
        < >

            <Flex style={{ alignItems: 'center' }}>
                <MenuIcon style={{ fontSize: 30, cursor: 'pointer' }} />
                <Bold style={{ color: 'black', fontSize: 21, marginLeft: 40, flex: 0.3 }}>
                    Dashboard
                </Bold>

                <OutlinedInput
                    endAdornment={<Search style={{ color: '#757575', fontSize: 30 }} />}
                    style={{ height: 50, borderRadius: 40, flex: 0.3, backgroundColor: '#e3e3e3', border: 'none', color: '#757575' }}
                    placeholder={'Search something here... '}

                />

                <Flex style={{ marginLeft: 80 }}>
                    <Badge badgeContent={4} color="primary">
                        <PaperAvatar component={Paper} elevation={2} style={{backgroundColor:'white'}} >
                            <Notifications style={{ color: 'black' }} />
                        </PaperAvatar>
                    </Badge>

                    <Badge badgeContent={9} color="primary" style={{ marginLeft: 50 }}>
                        <PaperAvatar component={Paper} elevation={2} style={{backgroundColor:'white'}}>
                            <MessageIcon style={{ color: 'black' }} />
                        </PaperAvatar>
                    </Badge>
                </Flex>

                <Flex style={{ marginLeft: 50 }}>
                    <PaperAvatar component={Paper} elevation={2} >
                        <img
                            style={{ width: 50, height: 50 }}
                            src={'https://randomuser.me/api/portraits/women/75.jpg'}
                        />
                    </PaperAvatar>
                </Flex>
            </Flex>
        </ >
    )
}

export default Header