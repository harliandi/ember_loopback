import RESTSerializer from '@ember-data/serializer/rest';

export default class MemberSerializer extends RESTSerializer {
  serialize(snapshot) {
    return {
      name: snapshot.attr('name'),
      role: snapshot.attr('role'),
      teamId: snapshot.attr('teamId'),
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
          type: 'member',
          attributes: {
            name: payload.name,
            role: payload.role,
            teamId: payload.teamId,
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
    const normalizedPayload = { members: payload };
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      normalizedPayload,
      id,
      requestType
    );
  }
}
