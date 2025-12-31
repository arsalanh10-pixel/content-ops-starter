---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: SyncHaul Trucking Coordination
      color: text-dark
      type: TitleBlock
    subtitle: Nationwide load tracking, appointment coordination, and proactive updates—built for brokers, shippers, and carriers.
    text: |-
      **What you get with SyncHaul**
      - Real-time shipment visibility & status updates
      - Appointment scheduling & check-call management
      - Exception handling (delays, breakdowns, detention risks)
      - Clear communication between shipper, carrier, and broker

      We keep freight moving across the USA with a simple, reliable process and fast response times.
    actions:
      - label: Request a Quote
        altText: ''
        url: /contact
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
      - label: Contact Us
        altText: ''
        url: /contact
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
        type: Link
    media:
      url: /images/main-hero.svg
      altText: SyncHaul hero image
      elementId: ''
      type: ImageBlock
    badge:
      label: USA Coverage • Fast Updates
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16

  - type: FeaturedItemsSection
    title:
      text: Our Core Services
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Built to reduce back-and-forth and keep every party aligned.
    items:
      - type: FeaturedItem
        title: Dispatch & Load Tracking
        subtitle: Daily check-calls + milestone updates
        text: |-
          Pickup/arrival/departure confirmations, ETA monitoring, and proactive communication so nothing gets missed.
        actions: []
        elementId: null
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Service icon
          elementId: ''
          url: /images/icon1.svg
          styles:
            self:
              borderRadius: x-large

      - type: FeaturedItem
        title: Appointment Coordination
        subtitle: Ship/recv scheduling support
        text: |-
          We coordinate appointment requests, confirmations, and changes—then share updates to all parties.
        actions: []
        elementId: null
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Service icon
          elementId: ''
          url: /images/icon2.svg
          styles:
            self:
              borderRadius: x-large

      - type: FeaturedItem
        title: Exception Management
        subtitle: Delays, breakdowns, reschedules
        text: |-
          If something goes off-plan, we act fast: notify stakeholders, find solutions, and document outcomes.
        actions: []
        elementId: null
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
            textAlign: left
        image:
          type: ImageBlock
          altText: Service icon
          elementId: ''
          url: /images/icon3.svg
          styles:
            self:
              borderRadius: x-large

    actions:
      - label: Get a Quote
        altText: ''
        url: /contact
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    badge:
      label: Simple • Reliable • Responsive
      color: text-primary
      styles:
        self:
          textAlign: center
      type: Badge
    elementId: ''
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pb-16
          - pt-16
          - pl-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center

  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection

  - type: GenericSection
    title:
      text: Quick Quote Request
      color: text-dark
      styles:
        self:
          textAlign: left
      type: TitleBlock
    subtitle: Tell us what you need—we’ll respond fast.
    text: |-
      Share basic lane and timing details and we’ll get back to you with next steps.
    actions: []
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: lane
          label: Lane
          hideLabel: true
          placeholder: Pickup city/state → Delivery city/state
          isRequired: true
          width: full
          type: TextFormControl
        - name: message
          label: Details
          hideLabel: true
          placeholder: Equipment type, pickup date, weight, special notes…
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
