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
    text: |-
      Email: dispatch@synchaultrucking.com
      Phone:
    actions: []
    media:
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
        - name: service
          label: Select Service
          hideLabel: true
          placeholder: Service (Truckload Coordination / Tracking / Paperwork)
          isRequired: true
          width: full
          type: TextFormControl
        - name: pickup
          label: Pickup City/State
          hideLabel: true
          placeholder: Pickup City/State
          isRequired: false
          width: full
          type: TextFormControl
        - name: delivery
          label: Delivery City/State
          hideLabel: true
          placeholder: Delivery City/State
          isRequired: false
          width: full
          type: TextFormControl
        - name: notes
          label: Notes
          hideLabel: true
          placeholder: Notes (equipment, windows, special instructions)
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Request a Quote
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    elementId: ""
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        justifyContent: center
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
seo:
  metaTitle: Contact / Request a Quote | SyncHaul
  metaDescription: Send your lane details and timelines—SyncHaul will respond with a clear plan and next steps.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
