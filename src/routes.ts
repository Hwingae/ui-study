import Test_1 from '@/components/test1';
import Test_2 from '@/components/test2/react';
import Accordions from '@/components/accordion';
import TabMenus from '@/components/tabMenu';

const routePaths = [
    '/',
    // '/test1',
    // '/test2',
    // '/test2/vanilla',
    // '/test2/react',
    '/accordion',
    '/tabMenu'
] as const
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
    key: ROUTE_PATH
    link: ROUTE_PATH
    name: string
}

export type ParentRoute = BaseRoute & {
    children: ROUTE_PATH[]
}

export type ChildRoute = BaseRoute & {
    children: ((props: unknown) => JSX.Element) | null
}

export type ROUTE = ParentRoute | ChildRoute

export const routes: Record<ROUTE_PATH, ROUTE> = {
    '/' : {
        key: '/',
        link: '/',
        name: 'root',
        children: [
            '/accordion',
            '/tabMenu'
            /*'/test1',
            '/test2'*/
        ]
    },
    '/accordion': {
        key: '/accordion',
        link: '/accordion',
        name: '아코디언',
        children: Accordions,
    },
    '/tabMenu': {
        key: '/tabMenu',
        link: '/tabMenu',
        name: '탭메뉴',
        children: TabMenus,
    },
    // '/test1' : {
    //     key: '/test1',
    //     link: '/test1',
    //     name: '테스트1',
    //     children: Test_1
    // },
    // '/test2' : {
    //     key: '/test2',
    //     link: '/test2/vanilla', // parent는 컴포넌트 x 대신 칠드런 출력
    //     name: '테스트2',
    //     children: ['/test2/vanilla', '/test2/react']
    // },
    // '/test2/vanilla' : {
    //     key: '/test2/vanilla',
    //     link: '/test2/vanilla',
    //     name: 'Vanilla',
    //     children: Test_3
    // },
    // '/test2/react' : {
    //     key: '/test2/react',
    //     link: '/test2/react',
    //     name: 'React',
    //     children: Test_2
    // }
}

export const isParentRoute = (route: ROUTE): route is ParentRoute => Array.isArray(route.children)

export const gnbRootList = (routes['/'] as ParentRoute).children.map(r => routes[r])