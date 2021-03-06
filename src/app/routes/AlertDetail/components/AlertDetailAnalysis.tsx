/**
 * The contents of this file are subject to the CYPHON Proprietary Non-
 * Commercial Registered User Use License Agreement (the "Agreement”). You
 * may not use this file except in compliance with the Agreement, a copy
 * of which may be found at https://github.com/dunbarcyber/cyclops/. The
 * developer of the CYPHON technology and platform is ControlScan, Inc.
 *
 * The CYPHON technology or platform are distributed under the Agreement on
 * an “AS IS” basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the Agreement for specific terms.
 *
 * Copyright (C) 2017 ControlScan, Inc. All Rights Reserved.
 *
 * Contributor/Change Made By: ________________. [Only apply if changes
 * are made]
 */

// Vendor
import * as React from 'react';

// Local
import { SubtleTextArea } from '../../../components/SubtleTextArea';
import { AlertDetailOutcome } from './AlertDetailOutcome';
import { AlertOutcomeChoices } from '../../../services/alerts/types';

// --------------------------------------------------------------------------
// Interfaces/Types
// --------------------------------------------------------------------------

/** Properties for AlertDetailAnalysis component. */
interface Props {
  /** Current alert notes. */
  notes: string;
  outcome: AlertOutcomeChoices;
  selectOutcome(outcome: AlertOutcomeChoices, notes: string): any;
}

// --------------------------------------------------------------------------
// Component
// --------------------------------------------------------------------------

/**
 * Displays the current analysis of an alerts and allows the user to make
 * changes to it.
 */
export class AlertDetailAnalysis extends React.Component<Props, {}> {
  public render(): JSX.Element {
    return (
      <div className="spacing-section">
        <h3 className="sub-title">Outcome</h3>

      </div>
    );
  }
}
