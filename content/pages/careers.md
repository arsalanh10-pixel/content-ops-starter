---
title: Contact / Request a Quote
slug: /contact
sections:
  - type: GenericSection
    badge:
      label: Contact / Request a Quote
      color: text-primary
      type: Badge
    title:
      text: Let’s move your freight with less friction.
      color: text-dark
      type: TitleBlock
    subtitle: Send your lane details and timelines—SyncHaul will respond with a clear plan and next steps.
    text: >
      Email: dispatch@synchaultrucking.com
      \n\nBuilt for: Brokers • Shippers • Owner-Operators • Small Fleets
      \nCoverage: Nationwide USA (all states)
    media:
      elementId: request-quote-form
      styles:
        self:
          padding: [pt-6, pb-6, pl-6, pr-6]
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      fields:
        - name: companyName
          label: Company Name
          hideLabel: true
          placeholder: Company Name
          isRequired: true
          width: full
          type: TextFormControl
        - name: yourName
          label: Your Name
          hideLabel: true
          placeholder: Your Name
          isRequired: true
          width: full
          type: TextFormControl
        - name: contact
          label: Email / Phone
          hideLabel: true
          placeholder: Email / Phone
          isRequired: true
          width: full
          type: TextFormControl

        # If your build supports a dropdown, keep this. If it fails, tell me and I’ll switch it to TextFormControl.
        - name: service
          label: Select Service
          hideLabel: true
          placeholder: Select Service
          isRequired: true
          width: full
          type: SelectFormControl
          options:
            - Truckload Coordination
            - Carrier Sourcing / Capacity Support
            - Live Tracking & Updates
            - Paperwork & POD Closeout
            - Consulting / Process Setup (SOPs, workflows)

        - name: pickup
          label: Pickup City/State
          hideLabel: true
          placeholder: Pickup City/State
          isRequired: false
          width: full
          type: TextFormControl
        - name: delivery
          label: Delivery City/State
