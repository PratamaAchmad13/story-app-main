class AboutPresenter {
    #view;
    #model;

    constructor({ view, model }) {
        this.#view = view;
        this.#model = model;
    }

    async getAboutData() {
        this.#view.showLoading();
        try {
            const aboutData = {
                title: 'Story App',
            };

            this.#view.displayAboutData(aboutData);
        } catch (error) {
            console.error('getAboutData: error:', error);
            this.#view.showError(error.message);
        } finally {
            this.#view.hideLoading();
        }
    }
}

export default AboutPresenter;