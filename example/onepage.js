import * as BlockTypes from '../lib/BlockTypes';

export default const initialBlockState = [
      {
        id : 1,
        depth:0,
        type : BlockTypes.HERO,
        styles : {
          maxWidth: '100%'
        },
        data : {
          src:'http://static.roadiz.io/files/c9ac1b18/roadiz_splash_06.jpg',
          width:400,
          height:300,
          pixelRatio:1,
          buttonText:'Learn More',
          buttonLink:'#/more',
          title:'Web Applications Built Faster',
          subtitle:'Modern, Clean & Flat User Interface Kit Made with Love & Passion'
        }
      },
      {
        id : 2,
        depth:0,
        type : BlockTypes.CONTAINER,
        styles : {},
        data : {
          align:'text-center'
        }
      },
      {
          id : 3,
          depth:1,
          parentId: 2,
          type : BlockTypes.HEADER,
          styles : {},
          data : {
            value:'Responsive web application and admin dashboard template',
            size:3
          }
      },
      {
          id : 4,
          depth:1,
          parentId: 2,
          type : BlockTypes.PARAGRAPH,
          styles : {},
          data : {
            value : `Meet NOW—a beautiful cross platform UI kit for web, tablet, and mobile designs—and it’s free!`
          }
      },
      {
        id : 5,
        depth:0,
        type : BlockTypes.HBOX,
        styles : {},
        data : {
          align:'text-center'
        }
      },
      {
        id : 6,
        depth:1,
        parentId: 5,
        type : BlockTypes.COLUMN,
        styles : {},
        data : {
          grid : 4
        }
      },
      {
        id : 7,
        parentId: 6,
        depth:2,
        type : BlockTypes.ICON,
        styles : {
          color: '#4cc0c1'
        },
        data : {
          name : 'fa-rocket',
          size:3
        }
      },
      {
        id : 8,
        parentId: 6,
        depth:2,
        type : BlockTypes.HEADER,
        styles : {},
        data : {
          value:'Web Application',
          size:4
        }
      },
      {
          id : 9,
          parentId: 6,
          depth:2,
          type : BlockTypes.PARAGRAPH,
          styles : {},
          data : {
            value : `Many mobile app widgets and components, it's fully responsive, it can run on all the size of the screens. Start work on your great idea today!`
          }
      },
      {
          id : 10,
          depth:1,
          parentId: 5,
          type : BlockTypes.COLUMN,
          styles : {},
          data : {
            grid : 4
          }
      },
      {
        id : 11,
        parentId: 10,
        depth:2,
        type : BlockTypes.ICON,
        styles : {
          color: '#4cc0c1'
        },
        data : {
          name : 'fa-rocket',
          size:3
        }
      },
      {
        id : 12,
        parentId: 10,
        depth:2,
        type : BlockTypes.HEADER,
        styles : {},
        data : {
          value:'Web Application',
          size:4
        }
      },
      {
          id : 13,
          parentId: 10,
          depth:2,
          type : BlockTypes.PARAGRAPH,
          styles : {},
          data : {
            value : `Many mobile app widgets and components, it's fully responsive, it can run on all the size of the screens. Start work on your great idea today!`
          }
      },
      {
        id : 14,
        parentId: 5,
        depth:1,
        type : BlockTypes.COLUMN,
        styles : {},
        data : {
          grid : 4
        }
      },
      {
        id : 15,
        parentId: 14,
        depth:2,
        type : BlockTypes.ICON,
        styles : {
          color: '#4cc0c1'
        },
        data : {
          name : 'fa-rocket',
          size:3
        }
      },
      {
        id : 16,
        parentId: 14,
        depth:2,
        type : BlockTypes.HEADER,
        styles : {},
        data : {
          value:'Web Application',
          size:4
        }
      },
      {
          id : 17,
          parentId: 14,
          depth:2,
          type : BlockTypes.PARAGRAPH,
          styles : {},
          data : {
            value : `Many mobile app widgets and components, it's fully responsive, it can run on all the size of the screens. Start work on your great idea today!`
          }
      }
];