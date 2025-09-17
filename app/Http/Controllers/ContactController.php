<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    // GET /api/contacts
    public function index()
    {
        return response()->json(Contact::all());
    }

    // POST /api/contacts
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($validated);

        return response()->json($contact, 201);
    }

    // PUT /api/contacts/{contact}
    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        $contact->update($validated);
        return response()->json($contact);
    }

    // DELETE /api/contacts/{contact}
    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json(['message' => 'Contact deleted']);
    }
}
