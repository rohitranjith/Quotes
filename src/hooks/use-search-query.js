import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const useSearchQuery = (options = { initial_loaded: false }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [loaded, setLoaded] = useState(options.initial_loaded)

    const removeSearchParam = (param_name) => {
        setSearchParams(params => {
            params.delete(param_name)
            return params
        }, { replace: true })
    }

    const removeSearchParams = async (params_keys) => {
        await setSearchParams(params => {
            params_keys.forEach(key_name => {
                params.delete(key_name)
            })
            return params
        }, { replace: true })
    }

    const setSearchParam = (param_name, param_value) => {
        if (loaded) {
            setSearchParams(params => {
                params.set(param_name, param_value)
                return params
            }, { replace: true })
        } else {
            setLoaded(true)
        }
    }

    const getSearchParam = (param_name) => {
        if (param_name === "limit") {
            const limit = searchParams.get(param_name)
            if (limit == 5 || limit == 25 || limit == 50 || limit == 100) {
                return limit
            } else {
                return 10
            }
        }
        return searchParams.get(param_name)
    }

    useEffect(() => {
        return () => { }
    }, [])

    return { searchParams, setSearchParams, getSearchParam, setSearchParam, removeSearchParam, removeSearchParams }

}

export default useSearchQuery