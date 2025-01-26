import RESTSerializer from '@ember-data/serializer/rest';

export default class TeamSerializer extends RESTSerializer {
  serialize(snapshot) {
    return {
      name: snapshot.attr('name'),
      description: snapshot.attr('description'),
    };
  }

  serializeIntoHash(hash, typeClass, snapshot, options) {
    const serialized = this.serialize(snapshot, options);
    Object.assign(hash, serialized); // Merge directly into the root
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (['findRecord', 'createRecord', 'updateRecord'].includes(requestType)) {
      return {
        data: {
          id: payload.id.toString(),
          type: 'team',
          attributes: {
            name: payload.name,
            description: payload.description,
          },
        },
      };
    }
    return super.normalizeResponse(...arguments);
  }

  normalizeDeleteRecordResponse(store, primaryModelClass, payload) {
    return super.normalizeDeleteRecordResponse(store, primaryModelClass, {});
  }

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    const normalizedPayload = { teams: payload };
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      normalizedPayload,
      id,
      requestType
    );
  }
}
