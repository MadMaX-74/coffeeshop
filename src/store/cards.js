const cards = {
    state: {
        bestsellers: [],
        coffee: [],
        goods: [],
        searchValue: '',
        sortValue: '',
    },
    mutations: {
        setCoffeeData(state, data) {
            state.coffee = data;
        },
        setGoodsData(state, data) {
            state.goods = data;
        },
        setBestsellersData(state, data) {
            state.bestsellers = data;
        },
        setSearchValue(state, value) {
            state.searchValue = value;
        },
        setSortValue(state, value) {
            state.sortValue = value;
        }
    },
    actions: {
        setCoffeeData({ commit }, data) {
            commit("setCoffeeData", data);
        },
        setGoodsData({ commit }, data) {
            commit("setGoodsData", data);
        },
        setBestsellersData({ commit }, data) {
            commit("setBestsellersData", data);
        },
        setSearchValue({ commit }, value) {
            commit("setSearchValue", value);
        },
        setSortValue({ commit }, value) {
            commit("setSortValue", value);
        }
    },
    getters: {
        getBestsellers(state) {
            return state.bestsellers
        },
        getCoffees(state) {
            return state.coffee.filter(item => item.name
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())
            ).filter(item => item.country.toLowerCase().includes(state.sortValue.toLowerCase()))
        },
        getGoods(state) {
            return state.goods
        },
        getProductById(state) {
            return (id) => {
                return state.coffees.find((card) => card.id === +id)
            }
        },
        getSearchValue(state) {
            return state.searchValue
        }
    }
}

export default cards;