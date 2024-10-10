Feature: General test funcionality

Scenario Outline: Visibility of headers
    Given Acceding on home page
    Then Get header "<email>" and "<phone>" element
    
Examples:
|email               | phone            |
|info@aisacsisco.eu  | +39 3395758078   |