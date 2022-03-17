import { useEffect, useState } from 'react'
import { baseService } from '../network/services/baseService';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const CategoryPage = () => {
    const [categoryList, setCategoryList] = useState([])
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getData();
    }, [refresh])

    const getData = async () => {
        baseService.get('/categories').then(data => setCategoryList(data))
        try {
            const data = await baseService.get('/categories')
            // console.log(data);
            // console.log(1);
            setCategoryList(data)
            // let status = 400;
            // if (status === 400) {
            //     throw new Error('Custom Error fırlattım')
            // }
        } catch (error) {
            console.log('Categories list error', error);
        }
    }

    return (
        <>
            <CategoryForm setRefresh={setRefresh} />
            <CategoryList categoryList={categoryList} setRefresh={setRefresh} />
        </>
    )
}

export default CategoryPage