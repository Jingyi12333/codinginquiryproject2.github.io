const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

//theme: pet shop
//subject: washing and grooming pets
//action verbs: wash, groom, blow dry

const App = {
 setup() {
    const showReferenceCard = ref(false);
    const image = "background.jpg";
    const userAction1 = ref(null);
    const userAction2 = ref(null);
    const userAction3 = ref(null);
    const result = ref(null);
    const savedCount = ref(0); 

    const collection = [
        { petName: "Cat",
            firstAction: "Wash",
            secondAction: "Groom",
            thirdAction: "Blow dry",
            buttonX: "75%",
            buttonY: "35%",
            cardX: "65%",
            cardY: "50%",
            showGameCard: ref(false),
            result: ref(null)
        },
        { petName: "Dog2",
             firstAction: "Wash",
            secondAction: "Groom",
            thirdAction: "Blow dry",
            buttonX: "31%",
            buttonY: "26%",
            cardX: "31%",
            cardY: "30%",
            showGameCard: ref(false),
            result: ref(null)
        },
        { machineName: "Dog1",
             firstAction: "Wash",
            secondAction: "Groom",
            thirdAction: "Blow dry",
            buttonX: "5%",
            buttonY: "35%",
            cardX: "5%",
            cardY: "55%",
            showGameCard: ref(false),
            result: ref(null)
        }
    ]

    function toggleOpenCloseReferenceCard() {
        if (showReferenceCard.value == false) {showReferenceCard.value = true} 
        else {showReferenceCard.value = false}
    }

    function toggleOpenCloseGameCard(item) {
        if (!item.showGameCard.value) {
            item.showGameCard.value = true;

            //Reset user choices
            userAction1.value = null;
            userAction2.value = null;
            userAction3.value = null;
        } else {item.showGameCard.value = false}
    }

    function recordUserAction(action) {
        if (userAction1.value == null) {
            userAction1.value = action;
        } else if (userAction2.value == null) {
            userAction2.value = action;
        } else if (userAction3.value == null) {
            userAction3.value = action;
        }
    }

    function validateResult(item) {
        if (userAction1.value === item.firstAction && 
         userAction2.value === item.secondAction && 
         userAction3.value === item.thirdAction) {
            item.result.value = "Success!";
            savedCount.value++;
        } else {
            item.result.value = "Failure.";
  
        }
    }

    function findCoordinates(event) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const xPercent = (event.clientX / windowWidth) * 100;
        const yPercent = (event.clientY / windowHeight) * 100;
        console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
    }


 return { 
    showReferenceCard,
    toggleOpenCloseReferenceCard,
    toggleOpenCloseGameCard,
    result,
    recordUserAction,
    validateResult,
    findCoordinates,
    image,
    savedCount,
    collection
 }
 }
}

createApp(App).use(vuetify).mount('#app');