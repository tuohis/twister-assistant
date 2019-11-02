export const dialogFlowResponse = (data: string) => ({
  fulfillmentText: data,
  payload: {
    google: {
      richResponse: {
        items: [{
	  simpleResponse: {
	    textToSpeech: data,
	  }
	}]
      }
    }
  }
});

