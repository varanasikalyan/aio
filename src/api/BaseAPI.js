import settings from '../settings';

class BaseAPI {
	constructor() {
		this.workflow_api_url = settings.WORKFLOW_API.url;
		this.workflow_direct_api_url = settings.WORKFLOW_DIRECT_METADATA.url;
	}
}

export default BaseAPI