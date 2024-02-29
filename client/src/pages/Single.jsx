import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom'
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2 `}>
            <img src={Edit} alt="" />
            </Link>
           
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, fugiat!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequatur, adipisci accusamus eos esse tempore, nulla eaque qui minus est quidem maxime fugiat ipsum, quod delectus possimus tempora ab voluptate
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis assumenda ab possimus corporis soluta. Magnam at minima similique corrupti doloremque recusandae eligendi pariatur animi soluta fugiat laborum dolores officiis, esse nesciunt quisquam possimus deleniti sequi necessitatibus reiciendis molestias alias?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptatibus reprehenderit! Sunt earum veniam rerum consectetur labore quos quis iure nihil! Atque, voluptas possimus. Quibusdam officiis ab soluta quaerat. Eveniet ea illum doloremque odio debitis accusamus quibusdam id ullam. Omnis et ullam est asperiores tenetur ipsam delectus ut maiores ab!
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, aspernatur numquam? Odit ullam ipsam provident laborum tenetur natus inventore exercitationem placeat possimus, labore vel magni quo voluptates officiis tempore illo iure? Incidunt debitis necessitatibus quis, obcaecati quasi quam quia exercitationem qui earum iure ullam facere similique dolores? Beatae, quisquam laudantium.
        </p>
      </div>
   <Menu/>
    </div>
  )
}

export default Single 