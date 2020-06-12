import React from 'react';
import Layout from '../components/Layout';
import {Sidebar, SidebarTitle, SidebarBackButton} from '../components/Sidebar';
import Main from '../components/Main';
import { List, ListItem } from '../components/List';
import { Link } from 'react-router-dom';
import lists from '../data/Lists';

const foods = lists.map((food) => {
  return (
    <ListItem>
      <Link style={{ textDecoration: 'none' }} to="">{food.Name}</Link>
    </ListItem>
  )
});

class Menu extends React.Component {
  render() {
    return (
      <Layout>
      <Sidebar>
        <SidebarBackButton to="/"></SidebarBackButton>
        <List>
          {foods}
        </List>
      </Sidebar>
      <Main>
        // 메뉴 생성 버튼
        <Link to="/memo/add">새로운 메모</Link>
      </Main>
    </Layout>
    );
  }
}

export default Menu;