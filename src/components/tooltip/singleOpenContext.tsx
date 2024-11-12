import { createContext, Dispatch, SetStateAction, useState, ReactNode, useContext } from "react";

const SingleOpenContext = createContext<[string | null, Dispatch<SetStateAction<string | null>>]>([
    null,
    () => { },
])

// Context의 단점: 이런 식으로 일부에서 여러군데에서 쓸 경우,
// 같은 Context가 겹쳐질 경우 안 쪽에서 쓴 녀석이 가장 가까운 데 있는 컨텍스트만 바라봄
// 즉, 밖에 있는 컨텍스트에서 정보를 받아올 수가 없다. -> 새로 컨텍스트를 또 만들어야 함
const SingleOpenContextProvider = ({ children }: { children: ReactNode }) => { 
    const state = useState<string | null>(null)
    return (
        <SingleOpenContext.Provider value={state}>
            {children}
        </SingleOpenContext.Provider>
    )
}

export default SingleOpenContextProvider

export const useSingleOpen = (id: string) => { 
    const [currentId, dispatch] = useContext(SingleOpenContext)
    return [id === currentId, dispatch] as const
}