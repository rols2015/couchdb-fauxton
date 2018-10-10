// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.
import FauxtonAPI from "../../../core/api";
import {DisabledConfigController} from "../cluster";
import utils from "../../../../test/mocha/testUtils";
import React from "react";
import ReactDOM from "react-dom";
import {mount} from 'enzyme';
import sinon from 'sinon';

const assert = utils.assert;

describe('Cluster Controller', () => {
  let controller;

  beforeEach(() => {
    FauxtonAPI.reduxDispatch = sinon.stub();

    var nodeList = [
      {'node': 'node1@127.0.0.1', 'isInCluster': true},
      {'node': 'node2@127.0.0.1', 'isInCluster': true},
      {'node': 'node3@127.0.0.1', 'isInCluster': false},
      {'node': 'node3@127.0.0.1', 'isInCluster': false},
      {'node': 'node3@127.0.0.1', 'isInCluster': false},
      {'node': 'node3@127.0.0.1', 'isInCluster': false}
    ];

    controller = mount(
      <DisabledConfigController nodes={nodeList} />
    );
  });

  it('renders the amount of nodes', () => {
    assert.ok(/6 nodes/.test(controller.text()), 'finds 6 nodes');
  });
});
